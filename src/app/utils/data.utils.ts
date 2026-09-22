import {DataInterface} from '../interfaces';

export function getReducedValue(data: DataInterface[], reduceBy: string, campo: string = 'valore') {
  switch (reduceBy) {
    case 'sum':
      return data.reduce((acc: number, d: DataInterface) => (acc + (+(d as any)[campo])), 0);
    case 'max':
      return data.reduce((acc: number, d: DataInterface) => Math.max(acc, (+(d as any)[campo])), -Infinity);
    case 'count':
      return data.length;
    default:
      return 0;
  }
}


export function getReducedValueByLabel(grouped: Partial<Record<any, any[]>>, label: string, reduceBy: string) {
  const data = grouped[label] ?? [];
  switch (reduceBy) {
    case 'sum':
      return data.reduce((acc: number, d: DataInterface) => (+acc + +d.valore), 0);
    case 'max':
      return data.reduce((acc: number, d: DataInterface) => Math.max(+acc, +d.valore), -Infinity);
    case 'count':
    case 'countunique':
      return data.length;
    default:
      return 0;
  }
}


export function getExplodedData(data: any, explodeBy: string): any {
  return data.flatMap((d: any) => {
    return d[explodeBy].split('|').map((f: any) => ({...d, [explodeBy]: f.trim()}));
  });

}

export function shuffleArray(array: any[]): any[] {
  const randomArray = JSON.parse(JSON.stringify(array));
  let currentIndex = randomArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [randomArray[currentIndex], randomArray[randomIndex]] = [
      randomArray[randomIndex], randomArray[currentIndex]];
  }
  return randomArray;
}

export function normalizzaStringa(value:string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

const METERS_PER_DEGREE_LAT = 111320;

/** Safety cap on relaxation passes in {@link jitterOverlappingPoints} — damped convergence needs more than a handful. */
const JITTER_MAX_ITERATIONS = 200;
/** Fraction of each pass's computed correction actually applied — keeps a point that overlaps many
 *  neighbors at once from accumulating a runaway displacement in a single pass (see below). */
const JITTER_DAMPING = 0.5;

/**
 * Separates [lon, lat] points that lie within `radiusMeters` of one another
 * by iterative pairwise repulsion (a simple collision-relaxation pass, as
 * used for map-label decluttering): on each pass, every pair still closer
 * than `radiusMeters` contributes a correction of half the shortfall along
 * the line between them; each point then moves by the *average* of all
 * corrections it received that pass (not their sum — a point touching many
 * overlapping neighbors at once would otherwise accumulate one shift per
 * neighbor and could be flung arbitrarily far in a single pass), scaled by
 * `JITTER_DAMPING` to avoid overshooting back into a new overlap. `radiusMeters`
 * is therefore the *minimum* separation this function will settle for — callers
 * should pass the on-screen marker size (plus any margin) so two markers are
 * never left closer together than they are wide.
 *
 * This is deliberately global rather than cluster-then-spiral: resolving
 * pairs in isolated groups can push a point *into* a third point it wasn't
 * grouped with (the spiral direction has no awareness of anything outside
 * its own cluster). Relaxing every pair every pass can't regress an
 * already-resolved pair, since a later pass would simply push it apart
 * again.
 *
 * If `constrain` is given (e.g. to keep each point inside its own region's
 * borders), it's applied *inside* the relaxation loop — after every pass's
 * repulsion, not as a separate step afterwards — and a pass that moves any
 * point counts as unfinished, same as a pass that finds an overlap. Applying
 * it only once at the end, after repulsion has already declared victory,
 * would let it snap two already-separated points back together (e.g. both
 * clamped to the same inset corner of a small region) with nothing left to
 * push them apart again; interleaving it means any overlap the clamp
 * reintroduces gets caught and re-relaxed on the next pass, so both
 * constraints — no overlap, inside the border — converge together instead
 * of one undoing the other.
 *
 * Points are projected to a local planar (meters) frame using one shared
 * reference latitude — longitude degrees are narrower than latitude degrees
 * away from the equator, so this keeps pushes isotropic (circular) rather
 * than stretched east-west, and keeps the projection stable as points move
 * across iterations (re-deriving it per-point per-iteration would make the
 * relaxation's convergence direction inconsistent). `constrain` itself is
 * called in the caller's original [lon, lat] space, since that's what region
 * geometry (e.g. GeoJSON polygons) is expressed in.
 */
export function jitterOverlappingPoints(
  coordinates: [number, number][],
  radiusMeters: number,
  constrain?: (point: [number, number], index: number) => [number, number],
): [number, number][] {
  const n = coordinates.length;
  if (n === 0) return [];

  const refLat = coordinates.reduce((sum, [, lat]) => sum + lat, 0) / n;
  const metersPerDegreeLon = METERS_PER_DEGREE_LAT * Math.cos((refLat * Math.PI) / 180);

  const toMeters = ([lon, lat]: [number, number]): [number, number] => [
    lon * metersPerDegreeLon,
    lat * METERS_PER_DEGREE_LAT,
  ];
  const toDegrees = ([x, y]: [number, number]): [number, number] => [
    x / metersPerDegreeLon,
    y / METERS_PER_DEGREE_LAT,
  ];

  const points: [number, number][] = coordinates.map(toMeters);

  // Applies `constrain` (in degree space) to every point and reports whether any
  // of them actually moved, so the caller can treat "the clamp had to do something"
  // the same as "a pair still overlaps" when deciding whether another pass is needed.
  const applyConstrain = (): boolean => {
    if (!constrain) return false;
    let moved = false;
    for (let k = 0; k < n; k++) {
      const [beforeX, beforeY] = points[k];
      const [afterX, afterY] = toMeters(constrain(toDegrees(points[k]), k));
      if (Math.abs(afterX - beforeX) > 1e-6 || Math.abs(afterY - beforeY) > 1e-6) moved = true;
      points[k][0] = afterX;
      points[k][1] = afterY;
    }
    return moved;
  };

  if (n === 1) {
    applyConstrain();
    return points.map(toDegrees);
  }

  // Coincident points (exact duplicate input coordinates, or two points the
  // border clamp above snapped to the same spot) start at zero distance, which
  // has no direction to push along — fall back to a deterministic golden-angle
  // spaced direction (keyed on the pair) so the relaxation below always has a
  // well-defined vector to work with, at *any* point during the loop, not just
  // before it starts.
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  applyConstrain();

  const dispX = new Array<number>(n);
  const dispY = new Array<number>(n);
  const degree = new Array<number>(n);
  for (let iter = 0; iter < JITTER_MAX_ITERATIONS; iter++) {
    dispX.fill(0);
    dispY.fill(0);
    degree.fill(0);
    let anyOverlap = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = points[j][0] - points[i][0];
        const dy = points[j][1] - points[i][1];
        const dist = Math.hypot(dx, dy);
        if (dist >= radiusMeters) continue;
        anyOverlap = true;
        const push = (radiusMeters - dist) / 2;
        let ux: number, uy: number;
        if (dist < 1e-9) {
          const angle = (i * n + j) * goldenAngle;
          ux = Math.cos(angle);
          uy = Math.sin(angle);
        } else {
          ux = dx / dist;
          uy = dy / dist;
        }
        dispX[i] -= ux * push;
        dispY[i] -= uy * push;
        degree[i]++;
        dispX[j] += ux * push;
        dispY[j] += uy * push;
        degree[j]++;
      }
    }
    for (let k = 0; k < n; k++) {
      if (!degree[k]) continue;
      points[k][0] += (dispX[k] / degree[k]) * JITTER_DAMPING;
      points[k][1] += (dispY[k] / degree[k]) * JITTER_DAMPING;
    }
    const constrained = applyConstrain();
    if (!anyOverlap && !constrained) break;
  }

  return points.map(toDegrees);
}

export interface BoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

/** Axis-aligned bounding box of a single [x, y] ring, e.g. a GeoJSON Polygon's outer ring. */
export function boundingBoxOfRing(ring: [number, number][]): BoundingBox {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const [x, y] of ring) {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  return {minX, minY, maxX, maxY};
}

/**
 * Clamps a point into whichever of `cells` it's already inside, or — if it's
 * outside all of them — into the nearest one, inset by `edgeInset` (a fraction
 * of that cell's own width/height) so the corrected point lands visibly inside
 * the region rather than sitting exactly on its boundary. A point that's
 * already inside a cell is returned unchanged — the inset only applies to the
 * fallback, so it never adds movement beyond what was already needed. Used to
 * keep a jittered marker within its own area (e.g. a comune's mosaic-grid
 * cells) instead of drifting into a neighbor's, without needing true polygon
 * geometry: each cell is just treated as its axis-aligned bounding box, which
 * is exact for the rectangular grid cells this is built for. If `cells` is
 * empty, the point is returned unchanged (nothing to constrain against).
 */
export function clampPointToCells(
  [x, y]: [number, number],
  cells: BoundingBox[],
  edgeInset = 0.15,
): [number, number] {
  for (const c of cells) {
    if (x >= c.minX && x <= c.maxX && y >= c.minY && y <= c.maxY) return [x, y];
  }
  let best: [number, number] = [x, y];
  let bestDist = Infinity;
  for (const c of cells) {
    const insetX = (c.maxX - c.minX) * edgeInset;
    const insetY = (c.maxY - c.minY) * edgeInset;
    const cx = Math.min(Math.max(x, c.minX + insetX), c.maxX - insetX);
    const cy = Math.min(Math.max(y, c.minY + insetY), c.maxY - insetY);
    const dist = (cx - x) ** 2 + (cy - y) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      best = [cx, cy];
    }
  }
  return best;
}


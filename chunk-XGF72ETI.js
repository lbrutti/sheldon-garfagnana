import{F as A,g as u,qa as L,sa as P,va as j,wa as F,za as Q}from"./chunk-CUJ4Q4ZN.js";import{Aa as _,Ab as c,Bb as m,Cb as p,Db as x,Eb as v,Ob as S,Pb as b,Qb as G,Sb as $,Tb as R,Ua as d,ba as H,bb as E,da as l,fc as B,gb as g,tb as w,ua as I,zb as h}from"./chunk-7QHWMYHH.js";var y=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new z(this.rowIndex,t)}_findMatchingGap(e){e>this.tracker.length;let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}},z=class{row;col;constructor(e,t){this.row=e,this.col=t}};var O=["*"];var Z=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,V=new H("MAT_GRID_LIST"),D=(()=>{class r{_element=l(_);_gridList=l(V,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(u(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(u(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=g({type:r,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,n){i&2&&w("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:O,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,n){i&1&&(S(),x(0,"div",0),b(1),v())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return r})();var K=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,f=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,n){this._gutterSize=N(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=n}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":a(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,i,n,o),this.setRowStyles(e,t,n,o)}setColStyles(e,t,i,n){let o=this.getBaseTileSize(i,n),s=this._direction==="rtl"?"right":"left";e._setStyle(s,this.getTilePosition(o,t)),e._setStyle("width",a(this.getTileSize(o,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},M=class extends f{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,n){super.init(e,t,i,n),this.fixedRowHeight=N(this.fixedRowHeight),K.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",a(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",a(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},T=class extends f{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,n){let o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,n),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",a(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",a(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},C=class extends f{setRowStyles(e,t){let i=100/this._rowspan,n=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,n);e._setStyle("top",this.getTilePosition(o,t)),e._setStyle("height",a(this.getTileSize(o,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function a(r){return`calc(${r})`}function N(r){return r.match(/([A-Za-z%]+)$/)?r:`${r}px`}var U="fit",W=(()=>{class r{_element=l(_);_dir=l(A,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(u(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===U?this._tileStyler=new C:t&&t.indexOf(":")>-1?this._tileStyler=new T(t):this._tileStyler=new M(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new y);let t=this._tileCoordinator,i=this._tiles.filter(o=>!o._gridList||o._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,n),i.forEach((o,s)=>{let k=t.positions[s];this._tileStyler.setStyle(o,k.row,k.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=g({type:r,selectors:[["mat-grid-list"]],contentQueries:function(i,n,o){if(i&1&&G(o,D,5),i&2){let s;$(s=R())&&(n._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,n){i&2&&w("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[B([{provide:V,useExisting:r}])],ngContentSelectors:O,decls:2,vars:0,template:function(i,n){i&1&&(S(),x(0,"div"),b(1),v())},styles:[Z],encapsulation:2,changeDetection:0})}return r})();var St=(()=>{class r{apiService;popolazione=I([]);constructor(t){this.apiService=t}ngOnInit(){this.apiService.getPopolazione(),this.popolazione=this.apiService.popolazione}static \u0275fac=function(i){return new(i||r)(E(Q))};static \u0275cmp=g({type:r,selectors:[["sheldon-public-story"]],decls:9,vars:8,consts:[["cols","2"],["groupBy","comune","title","Popolazione per comune","filterBy","unione|anno","reduceBy","sum",3,"data","limit"],["groupBy","comune","title","Popolazione per comune (stacked bars)","filterBy","unione|anno","masterField","unione","reduceBy","sum",3,"data","limit"],["groupBy","anno","title","Andamento popolazione per comune","filterBy","unione|comune","masterField","unione","reduceBy","sum",3,"data","limit"],["groupBy","comune","title","Popolazione totale dell'area","filterBy","unione|comune|anno","masterField","unione","reduceBy","sum",3,"data","limit"]],template:function(i,n){i&1&&(c(0,"mat-grid-list",0)(1,"mat-grid-tile"),p(2,"sheldon-chart-bars",1),m(),c(3,"mat-grid-tile"),p(4,"sheldon-chart-h-bars",2),m(),c(5,"mat-grid-tile"),p(6,"sheldon-chart-line",3),m(),c(7,"mat-grid-tile"),p(8,"sheldon-kpi",4),m()()),i&2&&(d(2),h("data",n.popolazione())("limit",10),d(2),h("data",n.popolazione())("limit",10),d(2),h("data",n.popolazione())("limit",-1),d(2),h("data",n.popolazione())("limit",-1))},dependencies:[P,j,L,F,W,D],encapsulation:2})}return r})();export{St as default};
//# sourceMappingURL=chunk-XGF72ETI.js.map

export const environment = {
  production: true,
  // Public Google Sheet exported as CSV via the gviz/tq endpoint.
  sheets: {
    spreadsheetId: '1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY',
    interventiGid: '807550168',
    popolazioneGid: '691841134',
  },
  // Static GeoJSON served from the public/ folder.
  data: {
    comuniPoints: 'data/comuni.points.json',
    comuniPolygons: 'data/comuni.polygons.grid.json',
  },
};

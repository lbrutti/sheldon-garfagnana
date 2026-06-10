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
  // Dashboard configuration sheets (separate spreadsheet).
  settings: {
    dashboardParsingConfigUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=286859829&single=true&output=csv',
    dashboardSettingsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=688611119&single=true&output=csv',
  },
  categorie: ['ambiente', 'cultura', 'mobilita', 'sicurezza', 'economia', 'sociale', 'societa']
};

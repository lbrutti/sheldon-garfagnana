export const environment = {
  production: false,
  // Replace with the Google Sheets CSV export URL after importing public/assets/i18n/it.csv
  i18n: {
//    translationCsvUrl: 'assets/i18n/it.csv',
    translationCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRrmf1dXB6sE4abUjVPGSNAqzGlWuF2tQaBQmoHgHWNDesSLILSFlt-I5kkc4X2s3fCyHVhNPi1tams/pub?output=csv'
  },
  // Public Google Sheet exported as CSV via the gviz/tq endpoint.
  sheets: {
    spreadsheetId: '1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY',
    interventiGid: '807550168',
    popolazioneGid: '691841134',
  },

  dataStoriesSheet: {
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSh0c8a5h_NUVNdBM8ALmq4qRUp88W1ieyShDnzI1-fCGOyZPlq574HMqWRd7ini_06DJYB_47u8Hq7/pub?gid=2038067554&single=true&output=csv
    spreadsheetId: '1WdSofKLdOmodsFbHiEVUmAM3vhaDqCjxZRuiSemUxas',
  },
  // Static GeoJSON served from the public/ folder.
  data: {
    comuniPoints: 'data/comuni.points.json',
    comuniPolygons: 'data/comuni.polygons.grid.json',
  },
  // Dashboard configuration sheets (separate spreadsheet).
  settings: {
    categorieUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=988971919&single=true&output=csv',

    unioniNascosteUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=1649942683&single=true&output=csv',

    dashboardParsingConfigUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=286859829&single=true&output=csv',
    dashboardSettingsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=688611119&single=true&output=csv',

    mapInterventiParsingConfigUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=309223040&single=true&output=csv',
    mapInterventiSettingsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=196849019&single=true&output=csv',

    dataStoriesSheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSh0c8a5h_NUVNdBM8ALmq4qRUp88W1ieyShDnzI1-fCGOyZPlq574HMqWRd7ini_06DJYB_47u8Hq7/pub?single=true&output=csv',
    dataStoriesListUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSh0c8a5h_NUVNdBM8ALmq4qRUp88W1ieyShDnzI1-fCGOyZPlq574HMqWRd7ini_06DJYB_47u8Hq7/pub?gid=2038067554&single=true&output=csv',
    dataStoriesParsingConfigUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSh0c8a5h_NUVNdBM8ALmq4qRUp88W1ieyShDnzI1-fCGOyZPlq574HMqWRd7ini_06DJYB_47u8Hq7/pub?gid=758044191&single=true&output=csv',
    dataStoriesInterventiSettingsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSh0c8a5h_NUVNdBM8ALmq4qRUp88W1ieyShDnzI1-fCGOyZPlq574HMqWRd7ini_06DJYB_47u8Hq7/pub?gid=650860672&single=true&output=csv',
    dataStoriesIstatSettingsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSh0c8a5h_NUVNdBM8ALmq4qRUp88W1ieyShDnzI1-fCGOyZPlq574HMqWRd7ini_06DJYB_47u8Hq7/pub?gid=803620129&single=true&output=csv',

  },
  categorie: ['ambiente', 'cultura', 'mobilita', 'sicurezza', 'economia', 'sociale', 'societa']
};

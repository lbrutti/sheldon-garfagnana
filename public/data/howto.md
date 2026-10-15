1. https://lbrutti.github.io/sheldon-garfagnana/utils/polygon-simplifier.html
2. caricare file `public/data/old/minimal-COMUNI TOSCANA - limits_R_9_municipalities-edited.geojson`
3. impostare settaggi: `columns: 112`,`rows: 140`, `simplification:0`
4. attivare `Show mosaic layer`
5. esportare mappa della regione completa e salvarla come `toscana.polygons.grid.geojson`
6. disattivare `Show mosaic layer`
7. esportare mappa della regione completa e salvarla come `toscana.polygons.geojson`
8. copiare `toscana.polygons.grid.geojson` e salvarlo come `comuni.polygons.grid.json`
9. dal file `comuni.polygons.grid.json` rimuovere tutti i comuni non necessari (usare attributo `name` per tenere solo quelli presenti qui https://docs.google.com/spreadsheets/d/1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY/edit?gid=807550168#gid=807550168 )
10. copiare `toscana.polygons.geojson` e salvarlo come `comuni.polygons.grid.focus.geojson`
11. dal file `comuni.polygons.grid.focus.geojson` rimuovere tutti i comuni non necessari (usare attributo `name` per tenere solo quelli presenti qui https://docs.google.com/spreadsheets/d/1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY/edit?gid=807550168#gid=807550168 )

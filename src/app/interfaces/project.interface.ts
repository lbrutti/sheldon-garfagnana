/**
 * based on
 * {
 *     "id": 1,
 *     "name": "Festival della Cultura Garfagnina – Vergemoli",
 *     "description": "Organizzazione e promozione di un festival annuale della cultura garfagnina con eventi di musica tradizionale, gastronomia locale e rievocazioni storiche.",
 *     "startDate": "03-09-2031",
 *     "startDateTs": 1946160000,
 *     "endDate": "06-12-2032",
 *     "endDateTs": 1985904000,
 *     "value": 85000,
 *     "category": "heritage",
 *     "comune": "Vergemoli",
 *     "lat": 44.085707,
 *     "lng": 10.381984,
 *     "status": "not_started"
 *   },
 *
 */

export default interface ProjectInterface {
  "id": number,
  "name": string,
  "description": string,
  "startDate": string,
  "startDateTs": number,
  "endDate": string,
  "endDateTs": number,
  "value": number,
  "category": string,
  "municipality": string,
  "lat": number,
  "lng": number,
  "status": string
}

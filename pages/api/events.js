const fetchHLEvents = require('../../plugins/hlevents.js');
const fetchOdumEvents = require('../../plugins/odumevents.js');
const fetchDSminorEvents = require('../../plugins/DSminorevents.js');
const fetchGillingsEvents = require('../../plugins/gillingsevents.js');
const fetchStatsEvents = require('../../plugins/statsevents.js');

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  /*
  const dsEvents = await fetchDSminorEvents();
  const gillingsEvents = await fetchGillingsEvents();
  const statsEvents = await fetchStatsEvents();
*/
 return [...hlevents, ...odumEvents];
}


export default async (req, res) => {
  const events = await fetchEvents()
  res.send(events)
}

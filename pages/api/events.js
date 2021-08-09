import fetchHLEvents from '../../plugins/hlevents.js';
import fetchOdumEvents from '../../plugins/odumevents.js';
import fetchDSminorEvents from '../../plugins/DSminorevents.js';
import fetchGillingsEvents from '../../plugins/gillingsevents.js';
import fetchStatsEvents from '../../plugins/statsevents.js';

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  const dsEvents = await fetchDSminorEvents();
  const gillingsEvents = await fetchGillingsEvents();
  const statsEvents = await fetchStatsEvents();

  return [...hlevents, ...odumEvents, ...dsEvents, ...gillingsEvents, ...statsEvents];
}

export default async (req, res) => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  const pid = req.query.pid
  //const keywords = ['Data Science', 'Interview', 'Technology', 'Resume', 'Analytics'];
  let filter1 = 'Data Science'
  let filter2 = 'Analytics'
  const filters = [filter1, filter2];
  const events = await fetchEvents()
    .then(events => (events.filter(event => {return filters.includes(event.name)})));
      //.includes() only accepts one argument
  res.send(events)
}

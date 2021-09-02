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
    const events = await fetchEvents()
    .then (events => {return events.filter(event => event.name.includes(pid)|| event.description.includes(pid))});
  res.send(events)
}

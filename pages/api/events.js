import fetchHLEvents from '../../plugins/hlevents.js';
import fetchOdumEvents from '../../plugins/odumevents.js';
import fetchDSminorEvents from '../../plugins/DSminorevents.js';
import fetchGillingsEvents from '../../plugins/gillingsevents.js';
import fetchStatsEvents from '../../plugins/statsevents.js';
import router from 'next/router';

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  const dsEvents = await fetchDSminorEvents();
  const gillingsEvents = await fetchGillingsEvents();
  const statsEvents = await fetchStatsEvents();

  return [...hlevents, ...odumEvents, ...dsEvents, ...gillingsEvents, ...statsEvents];
}

const useRouter = async () => {
  app.get('https://uncdataevents.netlify.app/api/events', function (req, res){
   router.post('/data+science');
   res.send('data science events');
  })
}
export default async (req, res) => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //temporary fix... info can be edited by client (disables certificate verification)
  const events = await fetchEvents();
  const routing = await useRouter();
  res.send(routing)
  res.send(events)
}

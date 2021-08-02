import fetchHLEvents from '../../plugins/hlevents.js';
import fetchOdumEvents from '../../plugins/odumevents.js';
import fetchDSminorEvents from '../../plugins/DSminorevents.js';
import fetchGillingsEvents from '../../plugins/gillingsevents.js';
import fetchStatsEvents from '../../plugins/statsevents.js';
import useRouter from 'next/router';

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  const dsEvents = await fetchDSminorEvents();
  const gillingsEvents = await fetchGillingsEvents();
  const statsEvents = await fetchStatsEvents();
  
  return [...hlevents, ...odumEvents, ...dsEvents, ...gillingsEvents, ...statsEvents];
  /*
  let dataEvents = [...hlevents, ...odumEvents, ...dsEvents, ...gillingsEvents, ...statsEvents];
  var sortedEvents = await dataEvents.filter((event) => {
    return event.title.includes('data science');
  });
  console.log(sortedEvents);
  */
}

const Index = () => {
  const router = useRouter()
  const { keyword } = router.query;
  keyword = 'data science';
  //return(<div>{keyword}</div>);
  console.log(keyword);
}
export default async (req, res) => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //temporary fix... info can be edited by client (disables certificate verification)
  const events = await fetchEvents();
  /*let sortedEvents = await events.filter((event) => 
    event.title.includes('Pride'));
  res.send(sortedEvents) */
  res.send(Index)
}

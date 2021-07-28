import fetchHLEvents from '../../plugins/hlevents.js';
import fetchOdumEvents from '../../plugins/odumevents.js';
import fetchDSminorEvents from '../../plugins/DSminorevents.js';
import fetchGillingsEvents from '../../plugins/gillingsevents.js';
import fetchStatsEvents from '../../plugins/statsevents.js';

//import useRouter from 'next/router';

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  const dsEvents = await fetchDSminorEvents();
  const gillingsEvents = await fetchGillingsEvents();
  const statsEvents = await fetchStatsEvents();

  return [...hlevents, ...odumEvents, ...dsEvents, ...gillingsEvents, ...statsEvents]
  .map(event => event.name);
}
/*
const Post = () => {
  const router = useRouter();
  const { slug } = router.query
{slug : '/events/[.slug].js'}
  return <p>Post: {slug}</p>
}
export default Post
*/

export default async (req, res) => {
  const events = await fetchEvents()
  res.send(events)
}

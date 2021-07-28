import fetchHLEvents from '../../plugins/hlevents.js';
import fetchOdumEvents from '../../plugins/odumevents.js';
import fetchDSminorEvents from '../../plugins/DSminorevents.js';
import fetchGillingsEvents from '../../plugins/gillingsevents.js';
import fetchStatsEvents from '../../plugins/statsevents.js';
import fetchUNCMainEvents from '../../plugins/uncevents.js';

import { useRouter } from 'next/router';

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  const dsEvents = await fetchDSminorEvents();
  const gillingsEvents = await fetchGillingsEvents();
  const statsEvents = await fetchStatsEvents();
  const UNCMainEvents = await fetchUNCMainEvents();

  return [...hlevents, ...odumEvents, ...dsEvents, ...gillingsEvents, ...statsEvents, ...UNCMainEvents];
}

const Post = () => {
  const router = useRouter();
  const { pid } = router.query

  return <p>Post: {pid}</p>
}
export default Post

export default async (req, res) => {
  const events = await fetchEvents()
  res.send(events)
}

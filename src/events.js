import fetchHLEvents from '../plugins/hlevents.js';
import fetchOdumEvents from '../plugins/odumevents.js';

export const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  return [...hlevents, ...odumEvents];
}

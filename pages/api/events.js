const fetchHLEvents = require('../../plugins/hlevents.js');
const fetchOdumEvents = require('../../plugins/odumevents.js');

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  return [...hlevents, ...odumEvents];
}

export default async (req, res) => {
  const events = await fetchEvents()
  res.send(events)
}

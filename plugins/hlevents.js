import fetch from 'node-fetch'

const API_URL = 'https://heellife.unc.edu/api/discovery/event/search?endsAfter=2021-06-22T16%3A12%3A48-04%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query=';

async function getEvents(API_URL) {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.log(error);
  }
  return [];
}

async function transformEvents(events) {
  return events.map(event => ({
    name: event.name,
    description: event.description,
    date: event.startsOn,
  }));
}

export default async function() {
  const events = await getEvents(API_URL)
  const transformedEvents = await transformEvents(events)
  return transformedEvents
}

const fetch = require("node-fetch");
const fs = require('fs')
const api_url = 'https://odum.unc.edu/wp-json/tribe/events/v1/events';

async function getEvents(api_url) {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data.events;
  } catch (error) {
    console.log(error);
  }
  return [];
}

async function transformEvents(events) {
  return events.map(event => ({
    name: event.title,
    description: event.description,
    url: `https://odum.unc.edu/event/${event.slug}/${event.start_date}`,
    date: event.start_date,
  }));
}

async function filterEvents(events, searchTerm) {
    return events.filter((event) => event.description.includes(searchTerm)); //
}

export default { getEvents, transformEvents, filterEvents }

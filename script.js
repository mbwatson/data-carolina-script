import fetchHeelLifeEvents from './plugins/hlevents.js';
import fs from 'fs';

let rawEvents = []

//fetch heel life events
const gatherAllEvents = async () => {
    const events = await fetchHeelLifeEvents();
    console.log(events)
    rawEvents.push(events);
    return events;
}

const writeEvents = async events => {
  //writing data to JSON file
  const jsonString = JSON.stringify(events, null, 2);
  fs.writeFile('./events.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  }); 
}

(async () => {
  try {
    const events = await gatherAllEvents()
    writeEvents(events)
  } catch (error) {
    console.log(error)
  }
})();


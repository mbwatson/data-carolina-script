import fetchHLEvents from './plugins/hlevents.js';
import fetchOdumEvents from './plugins/odumevents.js';
import fs from 'fs';

let actualEvents = []

const fetchAllEvents = async () => {
    const hlevents = await fetchHLEvents();
    //  console.log(hlevents);
    actualEvents.push(hlevents);

    const odumEvents = await fetchOdumEvents();
    // console.log(odumEvents);
    actualEvents.push(odumEvents);

    return { hlevents, odumEvents }
}
console.log(actualEvents)

/*
//create standard event object
const createEvent = (title, date, description, url) => {
    return { title, date, description, url }
}
//map events 
const actualEvents = responses.map(createEvent => ({ title, date, description, url }));
//fetching promises
const fetchingPromises = [
    fetchHLEvents(),
    fetchOdumEvents(),
]
//response from heel life and odum and adding to an array
Promise.all(fetchingPromises).then(responses => {
    //response from heellife is responses[0]
    const hl = responses[0].fetchHLEvents();
    //response from odum is responses[1]
    const oi = responses[1].fetchOdumEvents();
    //const allEvents = [heellife ones, odum ones, etc]
    const allEvents = [hl, oi];
    //and sort by date
    var dataScienceEvents = allEvents.filter((event) => {
        return event.description.includes('data science'); //case sensitive
    });
    //write to events.json file
})
    .catch()

*/

//writing data to JSON file
const writeEvents = async info => {
    const jsonString = JSON.stringify(info, null, 2);
    fs.writeFile('./newEvents.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
}

(async () => {
    try {
        const info = fetchAllEvents();
        writeEvents(info);
        console.log(info)
    }
    catch (error) {
        console.log(error);
    }
})();
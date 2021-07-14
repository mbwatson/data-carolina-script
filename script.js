import fetchHLEvents from './plugins/hlevents.js';
import fetchOdumEvents from './plugins/odumevents.js';
import fs from 'fs';

let actualEvents = []

const fetchAllEvents = async () => {
    const hlevents = await fetchHLEvents();
    actualEvents.push(hlevents);

    const odumEvents = await fetchOdumEvents();
    actualEvents.push(odumEvents);

    return actualEvents;
}

const createEvent = actualEvents.info;
allEvents = responses.map(createEvent =>({ title, date, description, url }));

//fetching promises
const fetchingPromises = [
    fetchHLEvents(),
    fetchOdumEvents(),
]
//response from heel life and odum and adding to an array
Promise.all(fetchingPromises).then(responses => {
    //response from heellife is responses[0]
    const hlResponse = responses[0].fetchHLEvents();

    //response from odum is responses[1]
    const odumResponse = responses[1].fetchOdumEvents();
    //const allEvents = [heellife ones, odum ones, etc]
    allEvents = [hlResponse, odumResponse];
    //and sort by date
    allEvents.sort((a, b) => a - b)
    console.log(allEvents);
})
    .catch()

//writing data to JSON file
const writeEvents = async (info) => {
    const jsonString = JSON.stringify(info, null, 2);
    fs.writeFile('./newEvents.json', jsonString, (err) => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
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
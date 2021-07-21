import fetchHLEvents from './plugins/hlevents.js';
import fetchOdumEvents from './plugins/odumevents.js';
import fs from 'fs';

let actualEvents = []

const fetchAllEvents = async () => {
    const hlevents = await fetchHLEvents();
    actualEvents.push(hlevents);

    const odumEvents = await fetchOdumEvents();
    actualEvents.push(odumEvents);

    actualEvents.sort((a, b) => a - b)

    console.log(actualEvents);

    return actualEvents;
}

//writing data to JSON file
const writeEvents = async (info) => {
    const jsonString = JSON.stringify(info, null, 2);
    fs.writeFile('./events.json', jsonString, (err) => {
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
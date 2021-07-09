import { renderAPI as renderHL } from './heellife-events-plugin/request.js';
import { renderAPI as renderOE } from './the-odum-institute-plugin/request.js';
//fetch heel life events
const fetchHLEvents = async () => {
    //get event info 
    let events = []
    const HLevents = renderHL();
    HLevents.push(events);
    return events;
}
//fetch odum events
const fetchOdumEvents = async () => {
    //get event info
    let events = []
    const odumEvents = renderOE();
    odumEvents.push(events);
    return events;
}
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

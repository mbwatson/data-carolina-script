//require._extensions['.mjs'] = require._extensions['.js'];
const renderHL = require('/heellife-events-plugin/request.mjs', renderAPI());
const renderOE = require('/odum-institute-plugin/request.mjs', renderAPI());
//fetch heel life events
const fetchHLEvents = async () => {
    let events = []
    //get event info 
    return renderHL(events);
}
//fetch odum events
const fetchOdumEvents = async () => {
    let events = []
    //get event info
    return renderOE(events);
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
    //response from odum is responses[1]
    //const allEvents = [heellife ones, odum ones, etc]
    //and sort by date
    //write to events.json file
})
    .catch()
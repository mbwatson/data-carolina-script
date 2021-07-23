const fetch = require('node-fetch');

const api_url = 'https://odum.unc.edu/wp-json/tribe/events/v1/events';

async function getAPI(api_url) {
    try {
        const response = await fetch(api_url);
        var data = await response.json();
        return data.events;
    }
    catch (error) {
        console.log(error);
    }
    return [];
}
async function transformEvents(info) {
    let infoArray
    try {
        infoArray = await info?.map(event => ({
            name: event.title,
            description: event.description,
            date: event.start_date,
            url: `https://odum.unc.edu/event/${event.slug}/${event.start_date.slice(0, 11)}`,
        }));
        return infoArray;
    } catch (error) {
        console.log(error);
    }
}

module.exports = async function () {
    const info = await getAPI(api_url)
    const transformedEvents = await transformEvents(info)
    return transformedEvents
};


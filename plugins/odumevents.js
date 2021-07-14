import fetch from "node-fetch";

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
       // info = await getAPI(api_url)
        infoArray = await info?.map(event => ({
            name: event.title,
            description: event.description,
            date: event.start_date,
            url: `https://odum.unc.edu/event/${event.slug}/${event.start_date.slice(0, 11)}`,
        }));
        let dataScienceEvents = await infoArray?.filter((event) => {
            event.description.includes('data science'); //case sensitive
        })
        return dataScienceEvents;
    } catch (error) {
        console.log(error);
    }
    console.log(dataScienceEvents);
}

export default async function () {
    const info = await getAPI(api_url)
    const transformedEvents = await transformEvents(info)
    return transformedEvents
};


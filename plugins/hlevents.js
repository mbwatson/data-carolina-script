import fetch from "node-fetch";

const api_url = 'https://heellife.unc.edu/api/discovery/event/search?endsAfter=2021-06-22T16%3A12%3A48-04%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query=';

async function getAPI(api_url) {
    try {
        const response = await fetch(api_url);
        var data = await response.json();
        return data.value;
    }
    catch (error) {
        console.log(error);
    }
    return [];
}
async function transformEvents(info) {
    try {
       // info = await getAPI(api_url);
        let infoArray = await info.map(event => ({
            name: event.name,
            description: event.description,
            url: `https://heellife.unc.edu/event/${event.id}`,
            date: event.startsOn,
        }));
        let dataScienceEvents = await infoArray.filter((event) => {
            return event.description.includes('data science'); //case sensitive
        })
        console.log(dataScienceEvents)
    }
    catch (error) {
        console.log(error)
    }
}

export default async function () {
    const info = await getAPI(api_url)
    const transformedEvents = await transformEvents(info)
    return transformedEvents
}



//using the fetch api
const api_url = 'https://odum.unc.edu/wp-json/tribe/events/v1/events';
//setting up async function
async function getAPI(api_url) {
    try {
        //storing response
        const response = await fetch(api_url);
        //storing data in json format
        var data = await response.json();
        // console.log(data);
    }
    catch (error) {
        console.log(error);
    }
    //accounting for json parsing error (enpoint might be sensitive to "user-agent")
    headers: {
        Accept: 'application/json, text/plain, */*',
            'User-Agent';
    }
    return data.value;
}
//rendering event data from API
async function renderAPI() {
    let info = await getAPI(api_url);
    let infoArray = await info.map(event => {
        return { name: event.title, description: event.description, url: `https://odum.unc.edu/event/${event.slug}/${event.start_date}`, date: event.start_date }

    });
    var dataScienceEvents = await infoArray.filter((event) => {
        return event.description.includes('practical frameworks'); //case sensitive
    });
    //writing data to JSON file
    const fs = require('fs');
    const jsonString = JSON.stringify(dataScienceEvents, null, 2);
    fs.writeFile('./newEvents.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
    console.log(dataScienceEvents);
}

export default {renderAPI};

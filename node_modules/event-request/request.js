//using the fetch api
//requiring JSDom to add DOM support for Node
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
//requiring/defining fetch function from api
const fetch = require("node-fetch");
//creating the api to call
const api_url = 'https://heellife.unc.edu/api/discovery/event/search?endsAfter=2021-06-22T16%3A12%3A48-04%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query=';
//making document a global variable
global.document = new JSDOM('https://heellife.unc.edu/api/discovery/event/search?endsAfter=2021-06-22T16%3A12%3A48-04%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query=').window.document;
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
        return { name: event.name, description: event.description, url: `https://heellife.unc.edu/event/${event.id}`, date: event.startsOn }

    });
    var dataScienceEvents = await infoArray.filter((event) => {
        return event.description.includes('data science'); //case sensitive
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
renderAPI()


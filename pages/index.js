import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  // variable to store the events in front-end's "state"
  // `events` contains the event data
  // `setEvents` is a function to assign the `events` variable
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events');
      if (!response.data) {
        return [];
      }
      // here, we're using the `setEvents` function to, ...well, set events
      // with the value of the `data` property in the response object.
      setEvents(response.data);
    }
    fetchEvents();
  }, []);
  
  return (
    <div>
      { events.length } events
      <hr />
      {
        events.map(event => {
          return (
            <div>
              <h3>{ event.name }</h3>
              <p>{ event.description }</p>
            </div>
          )
        })
      }
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { EventsList } from '../components/events-list'

export default function Home() {
  // variable to store the events in front-end's "state"
  // `events` contains the event data
  // `setEvents` is a function to assign the `events` variable
  const [events, setEvents] = useState([])
  const [error, setError] = useState(null)
  const inputElement = useRef()

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        if (!response.data) {
          throw new Error('no data returned')
          return [];
        }
        // here, we're using the `setEvents` function to, ...well, set events
        // with the value of the `data` property in the response object.
        setEvents(response.data);
      } catch (error) {
        setError(error)
        console.error(error.message)
      }
    }
    fetchEvents();
  }, []);

  // this function fires when the search button is clicked
  const handleClickSearch = event => {
    console.log(`\n\n\n\n the search button was clicked!\n\n\n\n`)
    console.log(`the query string is "${ inputElement.current.value }"`)
  }

  if (error) {
    return (
      <div>an error occurred!</div>
    )
  }
  
  if (!events.length) {
    return (
      <div>no events!</div>
    )
  }
  
  return (
    <div>
      <div>
        <input ref={ inputElement }/>
        <button onClick={ handleClickSearch }>search</button>
      </div>

      <hr />
      { events.length } events
      <EventsList events={ events } />
    </div>
  )
}

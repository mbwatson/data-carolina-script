import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events');
      if(!response.data){
        return [];
      }
      console.log(response)
    }
    fetchEvents()
  }, [])
  
  return (
    <div>
      placeholder
    </div>
  )
}

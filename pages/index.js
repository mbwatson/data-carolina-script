import Head from 'next/head'
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
      <Head>
        <title>Carolina Data Events</title>
        <meta name="description" content="Carolina Data Science Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}

import { fetchEvents } from './src/events.js'
import express from 'express'

const app = express()

// CONFIG

const PORT = process.env.PORT || 3030

// LISTEN

app.listen(PORT, () => {
  console.log(`Server is listening on port ${ PORT }.`)
})

// ROUTES

app.get('/', async (req, res) => {
  const events = await fetchEvents()
  res.send(events)
})

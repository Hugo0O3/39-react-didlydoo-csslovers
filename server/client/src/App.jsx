import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/events/')
      .then(res => setEvents(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div>
        <h2>Test servers</h2>
        {data.map(data => (
          <p key={data.id}>{data}</p>
        ))}
      </div>
    </>
  )
}

export default App

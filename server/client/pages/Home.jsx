import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../src/App.module.css";
import "../src/index.module.css";

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/events/')
            .then(res => setEvents(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className='events-wrapper'>
                <h2 className='home-title'>Events :</h2>
                <div className='events-container'>
                    {events.map(event => (
                        <div key={event.id} className='event-item'>
                            <h3>
                                <Link to={`/events/${event.id}`}>{event.name}</Link>
                            </h3>
                            <p>{event.description}</p>
                            <p>Author: {event.author}</p>

                            {event.dates.map(d => (
                                <p key={`${event.id}${d.date}`}>{d.date}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Home;
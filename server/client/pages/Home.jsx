import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/events/')
            .then(res => setEvents(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <section>
                <h2>Événements</h2>
                {events.map(event => (
                    <section key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <p>Author: {event.author}</p>

                        {event.dates.map(d => (
                            <p key={`${event.id}${d.date}`}>{d.date}</p>
                        ))}
                    </section>
                ))}
            </section>
        </>
    )
};

export default Home;
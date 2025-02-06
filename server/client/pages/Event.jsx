import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const Event = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/events/')
            .then(res => setEvents(res.data))
            .catch(error => console.log(error))
    }, [])


    const { id, name } = useParams()
    const [eventsDetails, setEventsDetails] = useState(null)

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/api/events/${id}`)
                .then(res => setEvents(res.data))
                .catch(error => console.log(error))
        }
    }, [id])

    const [attendees, setAttendees] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/attendees/')
            .then(res => setAttendees(res.data))
            .catch(error => console.log(error))
    }, [])

    const [attendeesDetails, setAttendeesDetails] = useState(null)
    useEffect(() => {
        if (name) {
            axios.get(`http://localhost:3000/api/events/${name}`)
                .then(res => setAttendeesDetails(res.data))
                .catch(error => console.log(error))
        }
    })

    return (
        <>
            <section>
                <h2>Event:</h2>
                {events.map(event => (
                    <section key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                    </section>
                ))}
            </section>
            {eventsDetails && (
                <section>
                    <h2>Details of event:</h2>
                    <h3>{eventsDetails.name}</h3>
                    <p>{eventsDetails.description}</p>
                    <p>{eventsDetails.date}</p>
                    <p>Publish by {eventsDetails.author}</p>
                </section>
            )}
            <section>
                <h2>Attendees:</h2>
                {attendees.map(attendee => (
                    <section key={attendee.id}>
                        <h3>{attendee.name}</h3>
                        </section>
                ))}
            </section>
            {eventsDetails && (
                <section>
                    <h2>Participation of {attendeesDetails.name}</h2>
                    </section>
            )}
        </>
    )
};

export default Event;
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const Event = () => {
    const { id } = useParams()
    const [eventsDetails, setEventsDetails] = useState(null)
    // const [attendees, setAttendees] = useState([])
    // const [attendeesDetails, setAttendeesDetails] = useState(null)

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/api/events/${id}`)
                .then(res => setEventsDetails(res.data))
                .catch(error => console.log(error))
        }
    }, [id])


    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/attendees/')
    //         .then(res => setAttendees(res.data))
    //         .catch(error => console.log(error))
    // }, [])

    // useEffect(() => {
    //     if (name) {
    //         axios.get(`http://localhost:3000/api/events/${name}`)
    //             .then(res => setAttendeesDetails(res.data))
    //             .catch(error => console.log(error))
    //     }
    // })

    return (
        <>
            {eventsDetails && (
                <section>
                    <h2>Details of event:</h2>
                    <h3>{eventsDetails.name}</h3>
                    <p>{eventsDetails.description}</p>
                    <p>{eventsDetails.date}</p>
                    <p>Publish by {eventsDetails.author}</p>
                </section>
            )}
            {/* <section>
                <h2>Attendees:</h2>
                {attendees.map((attendee, index) => (
                    <section key={`${attendee.name}${index}`}>
                        <h3>{attendee.name}</h3>
                    </section>
                ))}
            </section>
            {eventsDetails && (
                <section>
                    <h2>Participation of {attendeesDetails.name}</h2>
                </section>
            )} */}
        </>
    )
};

export default Event;
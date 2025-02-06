import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const Attendees = () => {
    const { id, name } = useParams()
    const [attendees, setAttendees] = useState([])
    const [attendeesDetails, setAttendeesDetails] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/api/attendees/')
            .then(res => setAttendees(res.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (name) {
            axios.get(`http://localhost:3000/api/attendees/${name}`)
                .then(res => setAttendeesDetails(res.data))
                .catch(error => console.log(error))
        }
    }, [name])

    return (
        <>
            <section>
                <h2>Attendees:</h2>
                {attendees.map((attendee, index) => (
                    <section key={`${attendee.name}${index}`}>
                        <h3>{attendee.name}</h3>
                        {attendee.dates.map((d, index) => {
                            <p key={`${d.date}${index}`}>{d}</p>
                        })}
                    </section>
                ))}
            </section>
            <section>
                <h2>Participation of {attendeesDetails.name}</h2>
            </section>
        </>
    )
}

export default Attendees
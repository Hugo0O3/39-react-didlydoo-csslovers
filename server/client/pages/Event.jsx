import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import "../src/App.module.css";
import "../src/index.module.css"

const Event = () => {
    const { id } = useParams()
    const [eventsDetails, setEventsDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        if (id) {
            setLoading(true)
                axios.get(`http://localhost:3000/api/events/${id}`)

                 .then(res => {setEventsDetails(res.data)
                    setLoading(false)
                 })
                .catch(error => {setLoading(false)
                    console.log(error)})
        }
    }, [id])

    if(loading){
        return <p>Loading...</p>
    }

   if(!eventsDetails) {
        return <p>No event found</p>
    }


    //invalid Date et no attendees yet à régler comme probème
    return (
        <>
            <section className='DetailsOneEvent'>
                <h2>Event : {eventsDetails.name}</h2>

                <p>{eventsDetails.description}</p>
                <p>Author: {eventsDetails.author}</p>
                <p>Dates:</p>

                {eventsDetails.dates.map((date, index)=> (
                    <p key={`${eventsDetails.id}${date}`}>{new Date(date).toLocaleString()}</p>
                ))}
               <h3>Attendees:</h3>
               {eventsDetails.attendees && eventsDetails.attendees.length > 0 ? (
                eventsDetails.attendees.map((attendee, index) => (
                    <p key={attendee.id}>{attendee.name}</p>
                ))
               ):(
                <p>No attendees yet</p>
               )}
                    </section>
                
        </>
    )
};

export default Event;

/*
{eventsDetails && ()}*/

                //not sure?
                /*.then(res => { const events = res.data 
                    const eventAttendee = events.filter(event =>
                        event.attendees.some(attendee => attendee.id === parseInt(id))
                    )
                    setEventsDetails(eventAttendee)
                })*/


// const [attendees, setAttendees] = useState([])
// const [attendeesDetails, setAttendeesDetails] = useState(null)


/*{ <section>
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
            )} }*/


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
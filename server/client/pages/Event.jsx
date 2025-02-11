import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";
import "../src/App.module.css";
import "../src/index.module.css";

const Event = () => {
    const { id } = useParams();
    const [eventsDetails, setEventsDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setLoading(true);
            axios
                .get(`http://localhost:3000/api/events/${id}`)
                .then((res) => {
                    setEventsDetails(res.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                });
        }
    }, [id]);

    const handleDeleteNavigate = () => {
        navigate('/');
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!eventsDetails) {
        return <p>No event found</p>;
    }

    const datesEvent = eventsDetails.dates.map((date) => date.date)

    return (
        <section className="DetailsOneEvent">
            {isEditing ? (
                <EditEvent event={eventsDetails} onCancel={handleEditToggle} />
            ) : (
                <>
                    <h2 className="event-title">Event: {eventsDetails.name}</h2>
                    <p>{eventsDetails.description}</p>
                    <p>Author: {eventsDetails.author}</p>
                    <p>Dates:</p>
                    {eventsDetails.dates.map((date, index) => (
                        <p key={`${eventsDetails.id}${index}`}>{date.date}</p>
                    ))}

                    <h3>Attendees:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Names</th>
                                {eventsDetails.dates.map((date) => (
                                    <th key={date.date}>{date.date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {eventsDetails.dates[0].attendees.map(({ name }) => (
                                <tr key={name}>
                                    <td>{name}</td>
                                    {datesEvent.map((date) => {
                                        const attendee = eventsDetails.dates
                                            .find((d) => d.date === date)
                                            ?.attendees.find((att) => att.name === name)

                                        return (
                                            <td key={`${name}${date}`}>
                                                {attendee ? (attendee.available ? "✅" : "❌") : "No dates"}
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <DeleteEvent id={id} onDelete={handleDeleteNavigate} />
                    <button onClick={handleEditToggle}>Edit Event</button>
                </>
            )}
        </section>
    )
}

export default Event
import React, {useEffect, useState} from 'react'
import axios from "axios"


const EditEvent = () => {
    const [eventName, setEventName] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventAuthor, setEventAuthor] = useState('')

    const eventData = {
        name: eventName,
        date: eventDate,
        description: eventDescription,
        author: eventAuthor
    }


    return (
    <h1>All events:</h1>

)
};

export default EditEvent;
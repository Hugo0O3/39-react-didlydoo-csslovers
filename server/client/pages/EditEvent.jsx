import React, {useEffect, useState} from 'react'
import axios from "axios"


//TEST 2
function Component(){
    const jsonData1 = {
        "id":'123456789',
        "name": "This is an event omg",
        "description": "Wow, you have a social life !",
        "author": "Johnny Silverhand",
        "dates": ["2025-04-19", "2025-04-20",],
    }

    const jsonData2 = {
        "id":'987654321',
        "name": "An other event wow",
        "description": "Party, party, yeah",
        "author": "V",
        "dates": ["2025-04-14", "2025-04-16",],
    }

    function handleClick(){
        const formData = new FormData()
        formData.append('json1', JSON.stringify(jsonData1))
        formData.append('json2', JSON.stringify(jsonData2))

        fetch('http://localhost:3000/api/events/', {
            method: 'POST',
            mode: 'cors', //idk ?? 
            body: formData
        })
    }

    return (
        <section className= 'addEvent' onClick={handleClick} >
            <h2>event here</h2>
            <button>Add your event</button>
            Send data to backend
        </section>
    )
}

export {Component};




//TEST 1
/*export default function App(){
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        const postBody = {
            id:'123456789',
            name: "This is an event omg",
            description: "Wow, you have a social life !",
            author: "Johnny Silverhand",
            dates: ["2025-04-19", "2025-04-20",],
         }
         axios.post('http://localhost:3000/api/events/', postBody)
         .then(response => setPostData(response.data))
         .catch(error => console.error(error))
    }, [])

    return (
        <section className='addEvent'>
            <button>Add your event:</button>
            {postData && <p>Post ID: {postData.id}</p>}
            {postData && <p>Post name: {postData.name}</p>}
            {postData && <p>Post description: {postData.description}</p>}
            {postData && <p>Post author: {postData.author}</p>}
            {postData && <p>Post dates: {postData.dates}</p>}
        </section>
    )
}*/








//code de jeudi/vendredi
    //const [eventName, setEventName] = useState('')
    //const [eventDate, setEventDate] = useState('')
    //const [eventDescription, setEventDescription] = useState('')
    //const [eventAuthor, setEventAuthor] = useState('')

   // const eventData = {
   //     name: eventName,
   //     date: eventDate,
   //     description: eventDescription,
    //    author: eventAuthor
    //}

   

//export default EditEvent;
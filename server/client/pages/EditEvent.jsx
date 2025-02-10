import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function App() {
    const [postData, setPostData] = useState(null)
    const [name, setName] = useState("")
    const [dates, setDates] = useState([])
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")

    const handleDateChange = (event) => {
        setDates([event.target.value]); // Stocker la date dans un tableau
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const eventInfos = {
            name,
            dates,
            author,
            description,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/events', eventInfos, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Success:', response.data);

            setName('')
            setDates([])
            setAuthor('')
            setDescription('')
        } catch (error) {
            console.error('Error submitting event:', error);
        }
    };

    return (
        <section className='addEvent'>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='John Doe' required />

                <label>Dates</label>
                <input type="date" onChange={handleDateChange} required />

                <label>Author</label>
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder='Harry PotDeFleur' required />

                <label>Description</label>
                <textarea
                    name="description"
                    rows="5"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}
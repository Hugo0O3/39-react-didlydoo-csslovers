import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function DeleteEvent({ id, onDelete }) {
    const [popUp, setPopUp] = useState(false)
    const [status, setStatus] = useState('')

    const handleDel = () => {
        axios.delete(`http://localhost:3000/api/events/${id}`)
            .then(() => {
                setStatus('Suppression réussie avec succès')
                onDelete()
            })
            .catch((error) => {
                console.error(error)
                setStatus("Erreur.")
            })
            .finally(() => {
                setPopUp(false)
            });
    }

    return (
        <section>
            <button onClick={() => setPopUp(true)}>Delete</button>

            {/* Pop Up oui ou non */}
            {popUp && (
                <section>
                    <p>Voulez-vous supprimer cet événement ?</p>
                    <section>
                        <button onClick={handleDel}>Confirmer</button>
                        <button onClick={() => setPopUp(false)}>Annuler</button>
                    </section>
                </section>
            )}
        </section>
    )

}
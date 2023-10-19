import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function UserForm() {
    const [errorMessage, setErrorMessage] = useState('')
    const saveNewUser = (newUser) => {
        fetch(' api/user ', {
            method: 'POST',
            body: JSON.stringify({ 'email': newUser[0].value, 'password': newUser[1].value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                if (data.error) {
                    setErrorMessage(data.error)
                } else {
                    setErrorMessage(data.message)
                }
            }))
    };
    const onSubmit = (event) => {
        event.preventDefault()
        saveNewUser(event.target)
    }

    return (
        <Form style={{ width: '18rem' }}>
            <Form.Label>Créer un nouvel utilisateur</Form.Label>
            <Form.Control style={{ border: 'solid black' }}>
                <form onSubmit={onSubmit}>
                    <input type="text" id="email" name="email" />
                    <input type="text" id="password" name="password" />
                    <button type="submit"> Sauvegarder </button>
                </form >
                <p>{errorMessage}</p>
            </Form.Control>
        </Form>
    )
}
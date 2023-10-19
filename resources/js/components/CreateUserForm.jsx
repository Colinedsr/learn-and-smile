import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function CreateUserForm() {
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
        <Form style={{ width: '18rem' }} onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>EMAIL</Form.Label>
                <Form.Control style={{ border: 'solid black' }} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control style={{ border: 'solid black' }} type="password" placeholder="*****" />
            </Form.Group>
            <Button type="submit" > Sauvegarder </Button>
            <p>{errorMessage}</p>
        </Form >
    )
}
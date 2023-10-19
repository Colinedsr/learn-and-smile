import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function UserForm() {
    const [responseMessage, setResponseMessage] = useState('')
    const [user, setUser] = useState({})
    const saveNewUser = (newUser) => {
        fetch(' api/user ', {
            method: 'POST',
            body: JSON.stringify({ 'email': newUser[0].value, 'password': newUser[1].value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                if (data.error) {
                    setResponseMessage(data.error)
                } else {
                    setUser(data.user)
                    setResponseMessage(data.message)
                }
            }))
    };

    const saveNewDreamer = (newDreamer) => {
        console.log(user)
        fetch('api/dreamer', {
            method: 'POST',
            body: JSON.stringify({
                'name': newDreamer[0].value,
                'birthdate': newDreamer[1].value,
                'user_id': user.id,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                if (data.error) {
                    setResponseMessage(data.error)
                } else {
                    setResponseMessage(data.message)
                }
            }))
    };
    const onSubmit = (event) => {
        event.preventDefault()
        saveNewUser(event.target)
    }

    const onSubmitNewDreamer = (event) => {
        event.preventDefault()
        saveNewDreamer(event.target)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: 'solid', padding: '40px' }}>
            <Form onSubmit={onSubmit}>
                <h1>Create a User</h1>
                <Form.Group>
                    <Form.Label>email</Form.Label>
                    <Form.Control style={{ border: 'solid black' }} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control style={{ border: 'solid black' }} type="password" placeholder="*****" />
                </Form.Group>
                <Button type="submit"> save </Button>
            </Form>
            <p>{responseMessage}</p>
            {user.id &&
                <Form onSubmit={onSubmitNewDreamer}>
                    <Form.Group>
                        <Form.Label>Dreamer's name</Form.Label>
                        <Form.Control style={{ border: 'solid black' }} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dreamer's birthdate</Form.Label>
                        <Form.Control style={{ border: 'solid black' }} type="text" />
                    </Form.Group>
                    <Button type="submit"> save </Button>

                </Form>
            }
        </div>
    )
} 
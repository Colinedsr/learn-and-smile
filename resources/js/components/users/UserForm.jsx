import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function UserForm() {
    const [userResponseMessage, setUserResponseMessage] = useState('')
    const [dreamerResponseMessage, setDreamerResponseMessage] = useState('')
    const [user, setUser] = useState({})
    const saveNewUser = (newUser) => {
        fetch(window.location.href + '/store', {
            method: 'POST',
            body: JSON.stringify({ 'email': newUser[0].value, 'password': newUser[1].value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                if (data.error) {
                    setUserResponseMessage(data.error)
                } else {
                    setUser(data.user)
                    setUserResponseMessage(data.message)
                }
            }))
    };

    const saveNewDreamer = (newDreamer) => {
        fetch('dreamer', {
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
                    setDreamerResponseMessage(data.error)
                } else {
                    setDreamerResponseMessage(data.message)
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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
            <Form onSubmit={onSubmit}>
                <h1>Create a User</h1>
                <Row style={{ display: 'inline-flex' }}>
                    <Col>
                        <Form.Control style={{ width: 'auto' }} type="email" placeholder="email" />
                    </Col>
                    <Col>
                        <Form.Control style={{ width: 'auto' }} type="password" placeholder="password" />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit"> save </Button>
                    </Col>
                </Row>
            </Form>
            <p>{userResponseMessage}</p>
            {user.id &&
                <><Form onSubmit={onSubmitNewDreamer}>
                    <Row style={{ display: 'inline-flex' }}>
                        <Col>
                            <Form.Control type="text" placeholder="Dreamer's name" />
                        </Col>
                        <Col>
                            <Form.Control type="date" placeholder='birthdate' />
                        </Col>
                        <Col>
                            <Button type="submit"> save </Button>
                        </Col>
                    </Row>
                </Form><p>{dreamerResponseMessage}</p></>
            }
        </div>
    )
} 
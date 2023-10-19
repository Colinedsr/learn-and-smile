import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UpdateDreamerForm() {
    const [dreamers, setDreamers] = useState([])
    const initialize = () => {
        fetch(' api/dreamer ', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                setDreamers(data)
            }))
    }

    const updateDreamer = (dreamerInfo) => {
        fetch(' api/dreamer ', {
            method: 'PUT',
            body: JSON.stringify({ 'id': dreamerInfo.target[0].value, 'groupId': dreamerInfo.target[1].value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                console.log(data)
            }))
    };

    const onSubmit = (event) => {
        event.preventDefault()
        updateDreamer(event)
    }

    const dreamersList = dreamers.map((dreamer) => {
        return (
            <Form onSubmit={onSubmit}>
                <Form.Group style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                    <Form.Label>{dreamer.name}</Form.Label>
                    <Form.Control readOnly style={{ border: 'solid black' }} type="id" defaultValue={dreamer.id} />
                    <Form.Control style={{ border: 'solid black' }} type="group_id" placeholder={dreamer.group_id} />
                </Form.Group>
                <Button type="submit" > Sauvegarder </Button>
            </Form >
        )
    })

    useEffect(() => {
        initialize()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: 'solid', padding: '40px' }}>
            <h1>Update Dreamer Group</h1>
            {dreamersList}
        </div>
    )
};

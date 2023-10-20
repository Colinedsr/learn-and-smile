import { useEffect, useState } from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function UpdateDreamerForm() {
    const [dreamers, setDreamers] = useState([])
    const initialize = () => {
        fetch(window.location.href + '/show', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                setDreamers(data)
            }))
    }

    const updateDreamer = (dreamerInfo) => {
        fetch(window.location.href, {
            method: 'PUT',
            body: JSON.stringify({ 'id': dreamerInfo.target[0].value, 'groupId': dreamerInfo.target[1].value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json().then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    alert(data.message)
                }
            }))
    };

    const onSubmit = (event) => {
        event.preventDefault()
        updateDreamer(event)
    }

    const dreamersList = dreamers.map((dreamer) => {
        return (
            <Form onSubmit={onSubmit} style={{ padding: '40px' }}>
                <Row style={{ display: 'inline-flex' }}>
                    <Col>
                        <p>{dreamer.name}</p>
                    </Col>
                    <Col>
                        <Form.Control readOnly style={{ width: 'auto' }} type="id" defaultValue={dreamer.id} />
                    </Col>
                    <Col>
                        <Form.Control style={{ width: 'auto' }} type="group_id" placeholder={"dreamer's group : " + dreamer.group_id} />
                    </Col>
                    <Col>
                        <Button type="submit" > Sauvegarder </Button>
                    </Col>
                </Row>
            </Form >
        )
    })

    useEffect(() => {
        initialize()
    }, [])

    return (
        <div>
            <h1>Update dreamer's group</h1>
            <p>List of dreamers not belonging to any user</p>
            {dreamersList}
        </div>
    )
};

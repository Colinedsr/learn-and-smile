import { useState } from "react";
import DreamerListByGroup from "./DreamerListByGroup";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function GroupListByUser() {
    const [groups, setGroups] = useState([])
    const fetchUserGroups = (userId) => {
        fetch(window.location.href + "/fetch", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => setGroups(data.results));
    };
    const onSubmit = (event) => {
        event.preventDefault();
        fetchUserGroups(event.target[0].value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '40px' }}>
            <h1>Fetch User's groups</h1>
            <Form onSubmit={onSubmit}>
                <Row style={{ display: 'inline-flex' }}>
                    <Col>
                        <Form.Control style={{ border: 'solid black' }} type="text" placeholder="User ID" />
                    </Col>
                    <Col>
                        <Button type="submit" > Show groups </Button>
                    </Col>
                </Row>
            </Form >
            <DreamerListByGroup groups={groups} />
        </div>
    );
}


import { useState } from "react";
import DreamerListByGroup from "./DreamerListByGroup";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function GroupListByUser() {
    const [groups, setGroups] = useState([])
    const fetchUserGroups = (userId) => {
        fetch("api/group", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => setGroups(data));
    };
    const onSubmit = (event) => {
        event.preventDefault();
        fetchUserGroups(event.target[0].value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Fetch User's groups</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>USER ID</Form.Label>
                    <Form.Control style={{ border: 'solid black' }} type="text" />
                </Form.Group>
                <Button type="submit" > Sauvegarder </Button>
            </Form >
            <DreamerListByGroup groups={groups} />
        </div>
    );
}


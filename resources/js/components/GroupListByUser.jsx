import { useState } from "react";
import DreamerList from "./DreamerList";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function GroupListByUser() {
    const [groups, setGroups] = useState([])
    const selectUser = (userId) => {
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
        selectUser(event.target[0].value);
    };

    return (
        <>
            <Form style={{ width: '18rem' }} onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>USER ID</Form.Label>
                    <Form.Control style={{ border: 'solid black' }} type="text" />
                </Form.Group>
                <Button type="submit" > Sauvegarder </Button>
            </Form >
            <DreamerList groups={groups} />
        </>
    );
}


import Card from "react-bootstrap/Card";
import DreamerList from "./DreamerList";
import { useState } from "react";

export default function GroupList() {
    const [dreamers, setDreamers] = useState([])
    const selectUser = (userId) => {
        fetch("api/group", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => setDreamers(data));
    };
    const onSubmit = (event) => {
        event.preventDefault();
        selectUser(event.target[0].value);
    };

    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Title>Afficher les groupes</Card.Title>
                <Card.Body style={{ border: 'solid black' }}>
                    <form onSubmit={onSubmit}>
                        <input type="text" id="userId" name="userId" />
                        <button type="submit"> Rechercher </button>
                    </form>
                </Card.Body>
            </Card >
            <DreamerList dreamers={dreamers} />
        </>
    );
}

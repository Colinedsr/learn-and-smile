import Card from 'react-bootstrap/Card';

export default function UserForm() {
    const saveNewUser = (newUser) => {
        fetch(' api/user ', {
            method: 'POST',
            body: JSON.stringify({ 'email': newUser[0].value, 'password': newUser[1].value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then(data => console.log(data))
    };
    const onSubmit = (event) => {
        event.preventDefault()
        saveNewUser(event.target)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>Créer un nouvel utilisateur</Card.Title>
            <Card.Body>
                <Card.Text style={{ border: 'solid black' }}>
                    <form onSubmit={onSubmit}>
                        <input type="text" id="email" name="email" />
                        <input type="text" id="password" name="password" />
                        <button type="submit"> Sauvegarder </button>
                    </form >
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function GroupMembers({ members }) {
    const list = members.map(member => {
        return (
            <ListGroup>
                <ListGroup.Item
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{member.name}</div>
                        {member.birthdate}
                    </div>
                    <Badge bg="primary" pill>
                        {member.avatar}
                    </Badge>
                </ListGroup.Item>
            </ListGroup >
        )
    })

    return (
        <div style={{
            display: 'flex'
        }}>
            {list}
        </div >
    );
}

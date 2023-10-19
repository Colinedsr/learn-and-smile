import GroupListByUser from "./groups/GroupListByUser";
import UpdateDreamerForm from "./dreamers/UpdateDreamerForm";
import UserForm from "./Users/UserForm";

export default function App() {
    return (
        <div style={{
            padding: '100px', display: 'flex', alignContent: 'space-between'
        }}>
            <UserForm />
            <GroupListByUser />
            <UpdateDreamerForm />
        </div >
    )
}
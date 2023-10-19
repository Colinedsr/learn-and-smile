import GroupListByUser from "./GroupListByUser";
import CreateUserForm from "./CreateUserForm";
import UpdateDreamerForm from "./UpdateDreamerForm";

export default function App() {
    return (
        <div style={{ padding: '100px' }}>
            <CreateUserForm />
            <GroupListByUser />
            <UpdateDreamerForm />
        </div>
    )
}
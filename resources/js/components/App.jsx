import { Routes, Route } from "react-router-dom"
import GroupListByUser from "./groups/GroupListByUser";
import UpdateDreamerForm from "./dreamers/UpdateDreamerForm";
import UserForm from "./Users/UserForm";
import HomePage from "./HomePage";

export default function App() {
    return (
        <div className="Aplicacion">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="api/user" element={<UserForm />} />
                <Route path="api/group" element={<GroupListByUser />} />
                <Route path="api/dreamer" element={<UpdateDreamerForm />} />
            </Routes>
        </div>
    )
}
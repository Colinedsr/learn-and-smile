import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Esta es la página de inicio</h1>
            <ul>
                <li><Link to="api/user">Tarea 2</Link></li>
                <li> <Link to="api/dreamer">Tarea 3</Link></li>
                <li><Link to="api/group">Tarea 4</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;
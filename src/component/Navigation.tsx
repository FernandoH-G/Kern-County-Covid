import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <div className="py-4 bg-blue-400 flex justify-around lg:justify-start lg:space-x-4 lg:px-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </div>
        </nav>

    );
}

export default Navigation
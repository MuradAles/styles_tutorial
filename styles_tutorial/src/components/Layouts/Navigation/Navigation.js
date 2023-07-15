import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <NavLink to="/PageStructure" className="active">Page Structure</NavLink>
                </li>
                <li>
                    <NavLink to="/About" className="active">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

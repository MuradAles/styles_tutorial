import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <NavLink to="/About" className="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/PageStructure" className="active">Page Structure</NavLink>
                </li>
                <li>
                    <NavLink to="/Shape" className="active">Shape</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    const shape = (
        <svg className="" width="50px" height="50px" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="10"
                fill="black" />
        </svg>
    )
    return (
        <nav className="navbar">
            <ul className="nav_links">
                <li className="link_format">
                    <div className="link_shape">
                        {shape}
                    </div>
                    <div className="link_name">
                        <NavLink to="/About" className="active">About</NavLink>
                    </div>
                </li>
                <li className="link_format">
                    <div className="link_shape">
                        {shape}
                    </div>
                    <div className="link_name">
                        <NavLink to="/PageStructure" className="active">Page Structure</NavLink>
                    </div>
                </li>
                <li className="link_format">
                    <div className="link_shape">
                        {shape}
                    </div>
                    <div className="link_name">
                        <NavLink to="/Shape" className="active">Shape</NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

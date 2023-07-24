import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    const shape = (
        <svg className="" width="50px" height="50px" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30"
                fill="black" />
        </svg>
    )
    return (
        <nav className="navbar">
            <ul className="nav_links">
                <li className="link_format">
                    <div className="link_shape">
                        <NavLink className="navlink_direction" to="/About">{shape}</NavLink>
                    </div>
                    <div className="link_name">
                        <NavLink className="navlink_direction" to="/About">About</NavLink>
                    </div>
                </li>
                <li className="link_format">
                    <div className="link_shape">
                        <NavLink className="navlink_direction" to="/PageStructure">{shape}</NavLink>
                    </div>
                    <div className="link_name">
                        <NavLink className="navlink_direction" to="/PageStructure">Page Structure</NavLink>
                    </div>
                </li>
                <li className="link_format">
                    <div className="link_shape">
                        <NavLink className="navlink_direction" to="/Shape">{shape}</NavLink>
                    </div>
                    <div className="link_name">
                        <NavLink className="navlink_direction" to="/Shape">Shape</NavLink>
                    </div>
                </li>
                <li className="link_format">
                    <div className="link_shape">
                        <NavLink className="navlink_direction" to="/Scrolling_Effect">{shape}</NavLink>
                    </div>
                    <div className="link_name">
                        <NavLink className="navlink_direction" to="/Scrolling_Effect">Scrolling Effect</NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

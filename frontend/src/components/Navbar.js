import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar-logo">
                <h2>Ecommerce</h2>
            </div>

            {/* links */}
            <ul className="navbar-links">
                <li>
                    <Link to="/cart">

                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
        </nav>
    )
}

export default Navbar

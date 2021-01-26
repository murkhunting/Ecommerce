import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar-logo">
                <h2>ECOMMERCE</h2>
            </div>

            {/* links */}
            <ul className="navbar-links">
                <li>
                    <Link to="/" >
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart-link">
                        {/* icon */}
                        <img src="../images/cart.png" alt="c" className="cart-icon"/>
                        <span>
                            Cart
                            <span className="cart-badge">0</span>
                        </span>
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar

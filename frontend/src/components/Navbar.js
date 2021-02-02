import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar-logo">
                <h2>eCOMMERCE</h2>
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
                            <span className="cart-badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar

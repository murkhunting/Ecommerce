import React from 'react'
import "./SideDrawer.css"
import {Link} from "react-router-dom"

const SideDrawer = ({show, click}) => {
    const SideDrawerClass = ["sidedrawer"];
    if (show){
        SideDrawerClass.push("show");
    }
    return (
        <div className={SideDrawerClass.join(" ")}>
            <ul className="sidedrawer-links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <img src="../images/blackcart.png" alt="c" className="cart-icon"/>
                        <span>
                            Cart
                            <span className="siderawer-badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        Shop
                    </Link>
                </li>
            </ul>
            
        </div>
    )
};

export default SideDrawer;

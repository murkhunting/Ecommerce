import React from 'react'
import "./CartItem.css"
import {Link} from "react-router-dom"

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="item-image">
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt=""/>
            </div>
            <Link to={`/product/${111}`} className="item-name">
                <p>Product 1</p>
            </Link>
            <p className="item-price">499.99€</p>
            <select className="item-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className="item-deletebtn">
                <img src="../images/trash.png" alt="trash"/>
            </button>
        </div>
    )
}

export default CartItem

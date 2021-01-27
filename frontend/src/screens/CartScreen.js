import React from 'react'
import "./CartScreen.css"
import CartItem from "../components/CartItem"

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cart-left">
                <h2>Shopping Cart</h2>
                <CartItem />
            </div>
            <div className="cart-right">
                <div className="cart-info">
                    <p>Subtotal (0) items</p>
                    <p>499.99€</p>
                </div>
                <div className="cart-info">
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

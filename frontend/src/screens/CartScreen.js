import React from 'react';
import "./CartScreen.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"

import CartItem from "../components/CartItem"

import {addToCart, removeFromCart} from "../redux/actions/cartActions"

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    //function to change the qty of the product
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    //function to remove from the cart
    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };

    return (
        <div className="cartscreen">
            <div className="cart-left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back to the shop</Link>
                    </div>
                ) : cartItems.map((item) => (
                    <CartItem 
                        item={item} 
                        qtyChangeHandler={qtyChangeHandler}
                        removeHandler={removeHandler}
                    />
                ))}
            </div>
            <div className="cart-right">
                <div className="cart-info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>{getCartSubTotal()}€</p>
                </div>
                <div className="cart-info">
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cart-info">
                    <Link to="/">Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

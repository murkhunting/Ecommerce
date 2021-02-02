import React from 'react'
import "./CartItem.css"
import {Link} from "react-router-dom"

const CartItem = ({item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="cartitem">
            <div className="item-image">
                <img src={item.imageUrl} alt={item.name}/>
            </div>

            <Link to={`/product/${item.product}`} className="item-name">
                <p>{item.name}</p>
            </Link>

            <p className="item-price">{item.price}€</p>

            <select 
                className="item-select" 
                value={item.qty} 
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
            >
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>
                        {x+1}
                    </option>
                ))}
            </select>

            <button className="item-deletebtn" onClick={() => removeHandler(item.product)}>
                <img src="../images/trash.png" alt="trash"/>
            </button>
        </div>
    )
}

export default CartItem

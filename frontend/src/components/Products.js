import React from 'react';
import "./Products.css";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt=""/>
            <div className="product-info">
                <p className="info-name">Play Station 5</p>
                <p className="info-description">The best video game you can have at the moment from Sony</p>
                <p className="info-prince">499.99€</p>
                <Link to={`/product/${111}`} className="info-button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Products

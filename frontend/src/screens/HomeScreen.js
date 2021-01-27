import React from 'react';
import "./HomeScreen.css";
import Products from "./../components/Products"

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="title">Last Products</h2>
            <div className="products">
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
            </div>
        </div>
    )
}

export default HomeScreen

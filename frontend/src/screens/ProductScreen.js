import React from 'react';
import "./ProductScreen.css"

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="product-left">
                <div className="left-image">
                    <img src="" alt=""/>
                </div>
                <div className="left-info">
                    <p className="left-Name">PlayStation 5</p>
                    <p>Price: 499.99€</p>
                    <p>Description:  </p>
                </div>
            </div>
            <div className="product-right">
                <div className="rigth-info">
                    <p>
                        Price: <span>499.99€</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Quantity: 
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen

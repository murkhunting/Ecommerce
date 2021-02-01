import React from 'react';
import "./ProductScreen.css"
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

//Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart} from "../redux/actions/cartActions";

const ProductScreen = (match, history) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    
    return (
        <div className="productscreen">
            <div className="product-left">
                <div className="left-image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt=""/>
                </div>
                <div className="left-info">
                    <p className="left-Name">PlayStation 5</p>
                    <p>Price: 499.99€</p>
                    <p>Description: jnbfs iasndf sidnfosind sdijnsdnfskfmn fnsdk dsnfosfn fsdnkfsmdfkdnmfns osdnfosnf </p>
                </div>
            </div>
            <div className="product-right">
                <div className="right-info">
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

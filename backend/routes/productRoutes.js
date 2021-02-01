const express = require("express");
const router = express.Router();

const { 
    getProducts, 
    getProductById, 
} = require("../controller/productControllers");

//GET all products from db - GET /api/products
router.get("/", getProducts)

//GET single product from db - GET /api/products/:id
router.get("/:id", getProductById)


module.exports = router;
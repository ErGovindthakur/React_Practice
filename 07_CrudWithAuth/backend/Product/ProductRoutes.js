import express from "express"
import { createProduct, deleteProduct, getProducts, updateProduct,getSingleProduct } from "./ProductController.js";

export const router = express.Router();

router.get("/getProducts",getProducts);
router.get("/getSingleProduct/:id",getSingleProduct);
router.put("/updateProduct/:id",updateProduct);
router.post("/createProduct",createProduct);
router.delete("/deleteProduct/:id",deleteProduct)

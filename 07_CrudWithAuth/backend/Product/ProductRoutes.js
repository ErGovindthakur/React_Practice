import express from "express"
import { createProduct, deleteProduct, getProducts, updateProduct } from "./ProductController.js";

export const router = express.Router();

router.get("/getProducts",getProducts);
router.put("/updateProduct",updateProduct);
router.post("/createProduct",createProduct);
router.delete("/deleteProduct",deleteProduct)

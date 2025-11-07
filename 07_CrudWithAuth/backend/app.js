import express from "express";
import {router as ProductRoute} from "./Product/ProductRoutes.js";
const app = express();

app.use("/api/v1/product",ProductRoute);

app.get("/",(req,res)=>{
     return res.status(200).json({
          success:true,
          message:"Server is running successfully"
     })
})

export default app;
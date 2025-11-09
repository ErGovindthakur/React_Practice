import express from "express";
import cors from 'cors';
import {router as ProductRoute} from "./Product/ProductRoutes.js";
const app = express();

app.use(cors({
     origin:"http://localhost:5173",
     credentials:true
}));
app.use(express.json({limit:'16kb'}));

app.use("/api/v1/product",ProductRoute);

app.get("/",(req,res)=>{
     return res.status(200).json({
          success:true,
          message:"Server is running successfully"
     })
})

export default app;
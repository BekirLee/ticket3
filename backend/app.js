import express from "express";
import dotenv from "dotenv";
import connectDB from "./app/db.js";
import cors from "cors";
import productRoutes from "./src/routes/productsRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());    

app.use(express.json());
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("srver running"));

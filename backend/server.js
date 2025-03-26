import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'

dotenv.config();

const app = express()
const PORT = 8383

app.use(express.json()) // TO MAKE SURE THAT POST WITH JSON WORKS, allow us to accept data in the req.body --> middleware

app.get("/api/products", (req,res) => {
    res.send("Server is ready")
})

app.post("/api/products", async (req, res) => {
    const product = req.body; // 

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success:true, data: newProduct})
    } catch (error) {
        console.log("Error in create product", error.message)
        res.status(500).json({ success: false, message: "Server error"})
    }
    
})

console.log(process.env.MONGO_URI)


app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
});


import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express()
const PORT = 8383

app.get("/products", (req,res) => {
    res.send("Server is ready")
})

console.log(process.env.MONGO_URI)


app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
});


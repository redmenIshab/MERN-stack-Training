import express from 'express';
import "dotenv/config";
import cors from 'cors';
import router from './routes.js';
import mongoose from 'mongoose';
import connectDB from './config/db.js';



connectDB();

const app = express();

// middlewares
app.use(express.json())
app.use(cors())

app.use("/api", router)


// calling a port
const PORT = process.env.PORT || 8000;

// setup for server listening
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
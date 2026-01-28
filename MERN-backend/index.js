import express from "express";
import cors from "cors";
import router from "./route.js";
import mongoose from "mongoose";

//DB url
const username = "new-user-36"
const password = "new@123"
const DB_USERNAME = encodeURIComponent(username);
const DB_PASSWORD = encodeURIComponent(password);
const MONGO_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.mk57nfb.mongodb.net/`;
const app = express();

//DB CONNECTION using IIFE syntax

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB Connection successful!");
  } catch (err) {
    console.log("DB connection Error", err);
  }
})();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});

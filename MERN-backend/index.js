import express, { Router } from 'express';
import router form "./routes.js"

const app = express();
app.use = (express.json())


app.use = ("/api",router)



const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})
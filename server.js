import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.post("/auth/login", (req, res) => {
  if (Object.keys(req.body) === 0) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const token = jwt.sign({ id: 1, email }, "p455w0rd!554f3");

  res.status(200).json({
    token,
    success: true,
    message: "logged in successful",
  });
});

const port = 3999;

app.listen(port, () => console.log("Server started " + port));

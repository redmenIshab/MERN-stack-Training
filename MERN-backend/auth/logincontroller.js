import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../model/user.js";
const SECRET_KEY = "MAKESOMERANDOMSECRETKEY";

const loginController = async (req, res, next) => {
  console.log("login route", req.body);
  let { email, password } = req.body;
  if (!email || !password) res.status(400).send("Email or Password is missing");
  else {
    //logic to check email and password.
    let user = await userModel.findOne({ email: email });
    if (!user) return res.status(400).send("User does not exist.");
    // check for password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid password!");
    let token = jwt.sign({ email, password }, SECRET_KEY);
    res.status(200).send({ token: token, message: "login successfully" });
  }
};
export default loginController;

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../model/user.js";
const SECRET_KEY = "MAKESOMERANDOMSECRETKEY";

const loginController = async (req, res, next) => {
 try {
    console.log("login route", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email or Password is missing" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login successfully",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export default loginController;

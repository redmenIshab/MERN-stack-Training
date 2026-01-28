import jwt from 'jsonwebtoken';
import UserModel from '../model/userModel.js';
import bcrypt from 'bcrypt';
const SECRET_KEY = "RandomString";

const LoginController = async (req, res, next) => {
    console.log("login controller called", req.body)


let { email, password } = req.body
if (!email || !password)
res.status(400).send("Email or Password is missing")
else {


let user = await UserModel.findOne({ email: email })
if (!user) 
    res.status(400).send({ message: "User not found. Please sign up." })

let isPasswordValid = await bcrypt.compare(password, user.password)
if (!isPasswordValid) 
    res.status(400).send({ message: "Invalid password" })
    
    
// create a token
let token = jwt.sign({ email, password }, SECRET_KEY)
res.status(200).send ({ token: token, message: "Login succesfully"})
}

}
export default LoginController
import jwt from 'jsonwebtoken'

const LoginController = (req, res, next) => {
    console.log("login controller called", req.body)


let { email, password } = req.body
if (!email || !password)
res.status(400).send("Email or Password is missing")
else {
// create a token

let token = jwt.sign({ email, password }, "RandomString")
res.status(200).send ({ token: token, message: "Login succesfully"})
}

}
export default LoginController
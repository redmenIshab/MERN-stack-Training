import jwt from 'jsonwebtoken'

const SECRET_KEY = "MAKESOMERANDOMSECRETKEY"

const loginController = (req, res, next)=>{
    console.log("login route", req.body)
    let {email, password} = req.body
    if(!email || !password)
        res.status(400).send("Email or Password is missing")
    else{
        //logic to check email and password.
        let token = jwt.sign({email, password}, SECRET_KEY)
        res.status(200).send({token: token, message: "login successfully"})
    }
}
export default loginController
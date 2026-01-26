import jwt from 'jsonwebtoken';

const SECRET_KEY = "MY$RANDOM$SECRETKEY$STRING";

const loginController = (req, res) => {
  console.log("login route", req.body)

  let { email, password } = req.body
  
    let token = jwt.sign({ email, password }, SECRET_KEY)
    res.status(200).send({ token: token, message: "Login succesfully" })
  }


export default loginController

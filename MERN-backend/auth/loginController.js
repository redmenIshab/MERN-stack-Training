import jwt from 'jsonwebtoken';

const SECRET_KEY="MYSOMERANDOMSECRETKEYSTRING"

const loginController=(req,res)=>{
    console.log("login route",req.body)
    if (!email||!password){
        res.status(400).send("Email or Password is missing")
    }
    else{
        let token=jwt.sign({email,password},"RandomString")
        res.status(200).send({toekn:token,message:"Login successful"})
    }
} 

export default loginController;
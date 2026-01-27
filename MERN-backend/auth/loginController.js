import  jwt  from "jsonwebtoken";

const SECRET_KEY ="MYSOMERANDOMSECRETKEYSTRING";
const loginController =(req,res,next)=>{
console.log ("login route",req.body)
let {email,password} = req.body
if (!email || !password)
    res.status(400).send("email or password is missing")
else{
    // some authenticste logic 
    let token = jwt.sign ({email,password},SECRET_KEY);
    res.status(200).send({token:token,message:"login successfully"})


}
}
export default loginController;
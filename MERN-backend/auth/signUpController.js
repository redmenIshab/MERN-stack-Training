
import UserModel from "../model/userModel.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;
 const signUpController = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        await UserModel.create({ username:username, email:email , password: encryptedPassword });

        res.status(200).send({ message: "User created successfully" });
    } catch (err) {
        console.log("Error in signUpController:", err);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

export default signUpController;
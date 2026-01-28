
import UserModel from "../models/user.js";


 const signUpController = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        await UserModel.create({ username, email, password });

        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        console.log("Error in signUpController:", error);
        res.status(500).send({ error: error.message });
    }
};

export default signUpController;
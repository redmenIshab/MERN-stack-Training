import UserModel from "../model/user.js";
import bcrypt from "bcrypt";
const SALT_ROUNDS = 10;
const SignUpController = async (req, res, next) => {
  try {
    let { email, password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await UserModel.create({ email, password: hashedPassword, username });

    res.status(200).send({ message: "User created successfully!" });
  } catch (err) {
    console.log("Error on creatin user", err);
    res.status(500).send("Error on creating user!");
  }
};

export default SignUpController;

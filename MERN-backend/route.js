import { Router } from "express";
import handleAuth from "./auth/auth.js";
import loginController from "./auth/logincontroller.js";
import SignUpController from "./auth/signupcontroller.js";

const router = Router();

//auth related routes

router.get("/auth/", handleAuth);
router.post("/auth/login", loginController);
router.post("/auth/signup", SignUpController);

export default router;

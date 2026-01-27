import { Router } from "express";
import handlerAuth from "./auth/auth.js"
import loginController from "./auth/loginController.js"


const router=Router();

router.get('/auth/', handlerAuth)
router.post('/auth/login',loginController)

export default router;


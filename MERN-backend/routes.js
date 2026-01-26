import { Router } from "express";
import handlerAuth from "./auth.js"
import loginController from "./auth/loginController.js"


const router=Router();

router.get('/auth/', handleAuth)
router.post('/auth/login', logincontroller)

export default router;


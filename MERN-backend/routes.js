import { Router } from 'express';
import handleAuth from './auth/auth.js'
import LoginController from './auth/LoginController.js';
import signUpController from './auth/signUpController.js';
const router = Router();


// auth related routes
router.get('/auth/', handleAuth)
router.post('/auth/login', LoginController)
router.post('/auth/signup', signUpController)

export default router;
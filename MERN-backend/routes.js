import { Router } from 'express';
import handleAuth from './auth/auth.js'
import LoginController from './auth/LoginController.js';
const router = Router();


// auth related routes
router.get('/auth/', handleAuth)
router.post('/auth/login', LoginController)

export default router;
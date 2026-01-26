import { Router } from 'express';
import handleAuth from './Auth/auth.js';
import loginController from './Auth/LoginController.js';

const router = Router();

// auth related routes
router.get('/auth', handleAuth)
router.post('/auth/login', loginController)

export default router;

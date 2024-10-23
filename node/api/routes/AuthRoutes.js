import express from 'express';
import { registerAdmin, loginAdmin, validateToken, logout } from '../controllers/AuthController.js';


const router = express.Router();

router.post('/register', registerAdmin);

router.post('/login', loginAdmin);

router.post('/validate-token', validateToken);

router.post('/logout', logout);

export default router;

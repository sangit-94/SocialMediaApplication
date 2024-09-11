import express from 'express';
import { registerUser, loginUser, getUserProfile } from 'controllers/v1/userController';
//import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);

export default router;

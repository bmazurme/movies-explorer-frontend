import { Router } from 'express';
import { validateUserData } from '../utils/validator';
import { getCurrentUser, updateUser } from '../controllers/users';

const router = Router();

router.get('/api/users/me', getCurrentUser);
router.patch('/api/users/me', validateUserData, updateUser);

export default router;

import { Router } from 'express';

import { validateLoginData, validateRegistrData } from '../utils/validator';
import { createUser, login } from '../controllers/users';

const router = Router();

router.post('/api/signin', validateLoginData, login);
router.post('/api/signup', validateRegistrData, createUser);

export default router;

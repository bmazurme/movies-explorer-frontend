import { Router } from 'express';
// const auth = require('../middlewares/auth');

const router = Router();

router.use('/', require('./auth'));
router.use(
  '/',
  // auth,
  require('./users'),
);
router.use(
  '/',
  // auth,
  require('./movies'),
);

export default router;

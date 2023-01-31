import { NextFunction, Response } from 'express';

import jwt from 'jsonwebtoken';
import UnauthorizedError from '../errors/UnauthorizedError';
import { DEV_JWT_SECRET } from '../utils/devConfig';
// import { IUser } from '../models/user';

export default (req: any, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError();
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, DEV_JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError();
  }

  req.user = payload;

  next();
};

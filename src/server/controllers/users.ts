import { NextFunction, Request, Response } from 'express';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import UnauthorizedError from '../errors/UnauthorizedError';
import ConflictError from '../errors/ConflictError';

import { DEV_JWT_SECRET } from '../utils/devConfig';
import { USER_NOT_FOUND_RU, USER_BAD_REQUEST_RU, USER_CONFLICT_RU } from '../utils/constErrors';
import User from '../models/user';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user: any) => {
      const token = jwt.sign(
        // eslint-disable-next-line no-underscore-dangle
        { _id: user._id },
        DEV_JWT_SECRET,
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(() => next(new UnauthorizedError(USER_BAD_REQUEST_RU)));
};

const createUser = (req: any, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => res.send({
      // eslint-disable-next-line no-underscore-dangle
      _id: user._id,
      name,
      email,
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError());
      }
      if (err.code === 11000) {
        return next(new ConflictError(USER_CONFLICT_RU));
      }
      return next(err);
    });
};

const getCurrentUser = (req: any, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-underscore-dangle
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return next(new NotFoundError(USER_NOT_FOUND_RU));
      }

      return res.send(user);
    })
    .catch((err) => {
      next(err);
    });
};

const updateUser = (req: any, res: Response, next: NextFunction) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    req.user._id,
    {
      name,
      email,
    },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((data) => {
      if (!data) {
        return next(new NotFoundError(USER_NOT_FOUND_RU));
      }
      return res.send(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError());
      }

      if (err.code === 11000) {
        return next(new ConflictError(USER_CONFLICT_RU));
      }

      return next(err);
    });
};

export {
  login,
  createUser,
  getCurrentUser,
  updateUser,
};

/* eslint-disable no-underscore-dangle */
import { NextFunction, Request, Response } from 'express';

import Movie from '../models/movie';
import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import ForbiddenError from '../errors/ForbiddenError';

import { FILM_NOT_FOUND_RU, BAD_REQUEST_RU, FORBIDDEN_RU } from '../utils/constErrors';

const createMovie = (req: any, res: Response, next: NextFunction) => {
  const mov = req.body;

  Movie.create({ ...mov, owner: req.user._id })
    .then((movie) => res.status(200).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError(BAD_REQUEST_RU));
      }

      return next(err);
    });
};

const getMovies = (req: Request, res: Response, next: NextFunction) => {
  Movie.find({})
    .then((movie) => res.send(movie))
    .catch(next);
};

const deleteMovie = (req: any, res: Response, next: NextFunction) => {
  Movie.findById(req.params.id)
    .orFail(() => new NotFoundError(FILM_NOT_FOUND_RU))
    .then((movie: any) => {
      if (!movie.owner.equals(req.user._id)) {
        return next(new ForbiddenError(FORBIDDEN_RU));
      }

      return movie.remove()
        .then(() => res.send({ message: 'фильм удален' }));
    })
    .catch(next);
};

export { createMovie, getMovies, deleteMovie };

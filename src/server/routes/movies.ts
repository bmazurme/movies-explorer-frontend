import { Router } from 'express';

import { validateMovieData, validateObjectId } from '../utils/validator';
import { createMovie, getMovies, deleteMovie } from '../controllers/movies';

const router = Router();

router.post('/api/movies', validateMovieData, createMovie);
router.get('/api/movies', getMovies);
router.delete('/api/movies/:id', validateObjectId, deleteMovie);

export default router;

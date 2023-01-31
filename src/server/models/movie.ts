import {
  Schema,
  Document,
  model,
  Model,
} from 'mongoose';

import isUrl from 'validator/lib/isURL';

export interface IMovie extends Document {
  country: string;
  director: string;
  duration: number
  year: string;
  description: string;
  image: string;
  trailerLink: string;
  thumbnail: string;
  owner: Schema.Types.ObjectId;
  movieId: number;
  nameRU: string;
  nameEN: string;
}

export interface MovieModel extends Model<IMovie> {
  findMovieByName: (nameRU: string) => Promise<IMovie | undefined>;
}

const MovieSchema = new Schema({
  country: {
    type: String,
    required: true,
    minlength: 2,
    // maxlength: 30,
  },
  director: {
    type: String,
    required: true,
    minlength: 2,
    // maxlength: 30,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 4,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    // maxlength: 400,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (link: string) => isUrl(link),
      message: 'некорректные данные',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (link: string) => isUrl(link),
      message: 'некорректные данные',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (link: string) => isUrl(link),
      message: 'некорректные данные',
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    minlength: 2,
    // maxlength: 30,
  },
  nameEN: {
    type: String,
    required: true,
    minlength: 2,
    // maxlength: 30,
  },
});

export default model<IMovie, MovieModel>('Movie', MovieSchema);

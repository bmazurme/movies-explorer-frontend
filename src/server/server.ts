import path from 'path';
import express from 'express';
// import mongoose from 'mongoose';

import { errors } from 'celebrate';

import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { config as dotEnvConfig } from 'dotenv';
import limiter from './utils/limiter';

// import index from './routes/index';
import NotFoundError from './errors/NotFoundError';
import errorHandler from './middlewares/errorHandler';

import corsOptions from './utils/corsOptions';
import { requestLogger, errorLogger } from './middlewares/logger';

dotEnvConfig();

const {
  PORT = 3000,
  // PTH = 'mongodb://localhost:27017/moviesdb'.
} = process.env;

const helmetConfig = {
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'", 'https://api.nomoreparties.co', 'https://ya-praktikum.tech/api/v2/'],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://api.nomoreparties.co', 'https://ya-praktikum.tech/api/v2/'],
    connectSrc: ["'self'", 'https://api.nomoreparties.co', 'https://ya-praktikum.tech/api/v2/'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://ya-praktikum.tech/api/v2/'],
    imgSrc: ["'self'", 'https://api.nomoreparties.co', 'https://ya-praktikum.tech/api/v2/'],
  },
};

const server = express();

server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(PTH, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // useCreateIndex: true,
//   // useFindAndModify: false,
// });
server.use(requestLogger);

server.use(limiter);
server.use(helmet.contentSecurityPolicy(helmetConfig));

server.use('/static', express.static(path.resolve(process.cwd(), 'static')));
server.use(express.static(path.resolve(__dirname), { extensions: ['css', 'js'] }));

// server.use('/api/', index);

server.get('*', (_req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

server.use('*', () => {
  throw new NotFoundError('HTTP 404 Not Found');
});

server.use(errorLogger);
server.use(errors());
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

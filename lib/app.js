import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import npcsController from './controllers/npcs.js';

const app = express();

app.use(express.json());

app.use(npcsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

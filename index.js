import express from 'express';
import dotenv from 'dotenv';
import { questionRouter } from './Features/questions/question.routes.js';
import { optionRouter } from './Features/options/option.routes.js';
import { applicationErrorHandler } from './error.handler.js';

export const app = express();
dotenv.config();
app.use(express.json());
app.use('/api/questions/',questionRouter);
app.use('/api/options/',optionRouter);





app.use(applicationErrorHandler);
import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import { doWork } from '../util/doWork';

export const commonController = (req: Request, res: Response, next: NextFunction) => {
  const route = `http://localhost:${process.env.PORT}/`;

  doWork(5000);
  console.log(`Express route:\nHosting ${route}\n`);

  res.send(`Hello world!`);
};
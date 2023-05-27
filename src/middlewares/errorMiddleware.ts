import { NextFunction, Request, Response } from 'express';

interface ErrorStatusMap {
  [key: string]: number;
}

const statusByErrorLocal: ErrorStatusMap = {
  notFound: 404,
  alreadyExists: 409,
};

const error = (err: any, req: Request, res: Response, _next: NextFunction) => {
  const { message } = err;
  const status = err.status || statusByErrorLocal[err.errorType] || 500;
  return res.status(status).json({ message });
};

export default error;

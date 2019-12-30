import express, { NextFunction, Request, Response } from "express";

export const wrapper = (asyncFn: express.RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

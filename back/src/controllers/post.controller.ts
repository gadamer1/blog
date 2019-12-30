import express, { NextFunction, Request, Response } from "express";
import validate from "validate.js";
import { wrapper } from "../utils/wrapper";
import {
  _getPostsByAuthor,
  _getPostById,
  _createPost
} from "../services/post.service";

// get post by id
export const getPostById = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await _getPostById(req.params.postId);
      return res.status(200).json(post);
    } catch (e) {
      console.error(e);
      next();
    }
  }
);

//get post by author
export const getPostsByAuthor = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await _getPostsByAuthor(req.body.author);
      return res.status(200).json(post);
    } catch (e) {
      return res.status(400).send("잘못된 요청");
      next();
    }
  }
);

export const createPost = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await _createPost(req);
    } catch (e) {
      console.error(e);
      next();
    }
  }
);

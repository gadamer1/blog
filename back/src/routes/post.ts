import express, { Request, Response, NextFunction } from "express";
import * as AuthMiddleware from "../middlewares/auth";
import * as PostController from "../controllers/post.controller";

const router = express.Router();

// create post
router.post("/", AuthMiddleware.verifyLogin, PostController.createPost);

// get post one
router.post("/category/title", PostController.getPostByCategoryAndTitle);

// get postById
router.get("/:postId", (req: Request, res: Response, next: NextFunction) => {
  PostController.getPostById(req, res, next);
});

export default router;

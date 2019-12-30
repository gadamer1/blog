import express, { Request, Response, NextFunction } from "express";
import { getPostById, getPostsByAuthor } from "../controllers/post.controller";

const router = express.Router();

// create post
router.post("/", (req: Request, res: Response, next: NextFunction) => {});

// get postByAuthor
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  getPostsByAuthor(req, res, next);
});

// get postById
router.get("/:postId", (req: Request, res: Response, next: NextFunction) => {
  getPostById(req, res, next);
});

export default router;

import express from "express";
import * as PostController from "../controllers/post.controller";
const router = express.Router();

// get posts
router.get("/", PostController.getPosts);

// get posts by category
router.get("/category/:id", PostController.getPostsByCategory);

export default router;

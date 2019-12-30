import express, { NextFunction, Request } from "express";
import Post from "../models/Post.model";

// get post by id
export const _getPostById = async (id: String) => {
  const post = await Post.findById(id);
  return post;
};

//get posts by author
export const _getPostsByAuthor = async (author: String) => {
  const posts = await Post.find({ author });
  return posts;
};

export const _createPost = async (req: Request) => {
  const post = await Post.create({
    author: req.body.author,
    body: req.body.body,
    img: req.body.img
  });
  return post;
};

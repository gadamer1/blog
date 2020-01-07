import express, { NextFunction, Request } from "express";
import Post from "../models/Post.model";

// get post by id
export const getPostById = async (_id: String) => {
  const post = await Post.findById(_id);
  return post;
};

//get posts by author
export const getPostsByAuthor = async (authorId: String) => {
  const posts = await Post.find({ authorId });
  return posts;
};

export const createPost = async (
  authorId: string,
  body: string,
  title: string,
  category: string,
  hidden: boolean,
  nickname: string
) => {
  const post = await Post.create({
    authorId: authorId,
    body: body,
    title: title,
    category: category,
    hidden: hidden,
    nickname: nickname
  });
  return post;
};

export const getPosts = async () => {
  const postList = await Post.find({ hidden: false }).select([
    "title",
    "nickname",
    "Date",
    "category"
  ]);

  return postList;
};

export const getPostByCategoryAndTitle = async (
  category: string,
  title: string
) => {
  const post = Post.findOne({ category: category, title: title });

  return post;
};

export const getPostsByCategory = async (category: string) => {
  const posts = Post.find({ category: category });
  return posts;
};

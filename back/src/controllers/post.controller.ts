import express, { NextFunction, Request, Response } from "express";
import validate from "validate.js";
import { wrapper } from "../utils/wrapper";
import * as PostService from "../services/post.service";
import { selectCopyObject } from "../utils/jsutils";

// get post by id
export const getPostById = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    if (!postId) {
      return res
        .status(400)
        .json({ success: false, msg: "postId is not found" });
    }
    const post = await PostService.getPostById(postId);
    return res.status(200).json({ success: true, post });
  }
);

//get post by author
export const getPostsByAuthor = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.body.author;
    if (!authorId) {
      return await res
        .status(400)
        .json({ success: false, msg: "author is not found" });
    }
    const post = await PostService.getPostsByAuthor(authorId);
    return res.status(200).json({ success: true, post });
  }
);

export const createPost = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const input = selectCopyObject(req.body, [
      "authorId",
      "category",
      "body",
      "title",
      "hidden",
      "nickname"
    ]);
    const invalid = validate(input, {
      authorId: {
        presence: true,
        type: "string"
      },
      body: {
        presence: true,
        type: "string"
      },
      title: {
        presence: true,
        type: "string"
      },
      hidden: {
        presence: true,
        type: "boolean"
      },
      nickname: {
        presence: true,
        type: "string"
      }
    });
    if (invalid) {
      return res.status(409).json({ success: false, msg: invalid });
    }
    const post = await PostService.createPost(
      input.authorId,
      input.body,
      input.title,
      input.category,
      input.hidden,
      input.nickname
    );
    return res.status(200).json({ success: true, post });
  }
);

// 포스트의 리스트를 넘겨주기
export const getPosts = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const postList = await PostService.getPosts();
    return res.status(200).json({ success: true, postList });
  }
);

// 카테고리와 타이틀이름으로 포스트 하나 가져오기

export const getPostByCategoryAndTitle = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { category, title } = req.body;
    const post = await PostService.getPostByCategoryAndTitle(category, title);
    return res.status(200).json({ success: true, post });
  }
);

export const getPostsByCategory = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const category = req.params.id;
    const postList = await PostService.getPostsByCategory(category);
    return res.status(200).json({ success: true, postList });
  }
);

import mongoose from "mongoose";
import { CommentInterface } from "../interfaces/Comment.Interface";

export const CommentSchema = new mongoose.Schema({
  authorId: { type: String, required: true },
  postId: { type: String, required: true },
  body: { type: String, required: true },
  img: String,
  Date: { type: Date, default: Date.now }
});

export default mongoose.model<CommentInterface>("Comment", CommentSchema);

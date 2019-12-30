import mongoose from "mongoose";
import { UserSchema } from "./User.model";
import { CommentInterface } from "../interfaces/Comment.interface";

export const CommentSchema = new mongoose.Schema({
  author: UserSchema,
  body: { type: String, required: true },
  img: String,
  Date: { type: Date, default: Date.now }
});

export default mongoose.model<CommentInterface>("Comment", CommentSchema);

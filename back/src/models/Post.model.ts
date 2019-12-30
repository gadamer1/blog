import mongoose, { Schema } from "mongoose";
import { CommentSchema } from "./Comment.model";
import { UserSchema } from "./User.model";
import { PostInterface } from "../interfaces/Post.Interface";

const PostSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  author: UserSchema,
  body: { type: String, required: true },
  comments: CommentSchema,
  Date: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
  meta: {
    votes: Number,
    favs: Number
  },
  img: String
});

export default mongoose.model<PostInterface>("Post", PostSchema);

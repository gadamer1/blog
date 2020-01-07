import mongoose, { Schema } from "mongoose";
import { PostInterface } from "../interfaces/Post.Interface";

const PostSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  nickname: { type: String, required: true },
  authorId: { type: String, required: true },
  body: { type: String, required: true },
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

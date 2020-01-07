import { Document } from "mongoose";

export interface CommentInterface extends Document {
  authorId: string;
  postId: string;
  body: string;
  img: string;
  Date: Date;
}

import { Document } from "mongoose";
import { UserInterface } from "./User.Interface";
import { CommentInterface } from "./Comment.interface";

export interface PostInterface extends Document {
  title: string;
  authorId: string;
  body: string;
  comments: CommentInterface;
  Date: Date;
  updatedDate: Date;
  hidden: boolean;
  meta: {
    votes: number;
    favs: number;
  };
  img: string;
}

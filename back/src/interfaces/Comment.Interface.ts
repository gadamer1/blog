import { Document } from "mongoose";
import { UserInterface } from "./User.Interface";

export interface CommentInterface extends Document {
  authorId: string;
  body: string;
  img: string;
  Date: Date;
}

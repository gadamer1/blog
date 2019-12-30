import { Document } from "mongoose";
import { UserInterface } from "./User.Interface";

export interface CommentInterface extends Document {
  author: UserInterface;
  body: string;
  img: string;
  Date: Date;
}

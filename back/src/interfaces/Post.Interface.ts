import { Document } from "mongoose";

export interface PostInterface extends Document {
  title: string;
  authorId: string;
  body: string;
  Date: Date;
  updatedDate: Date;
  hidden: boolean;
  meta: {
    votes: number;
    favs: number;
  };
  img: string;
}

import { Document } from "mongoose";

export interface UserInterface extends Document {
  nickname: string;
  password: string;
  img: string;
}

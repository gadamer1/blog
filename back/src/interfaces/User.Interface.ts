import mongoose, { Document } from "mongoose";

export interface UserInterface extends Document {
  nickname: string;
  email: string;
  emailVerified: boolean;
  password: string;
  img: string;
}

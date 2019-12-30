import mongoose from "mongoose";
import { UserInterface } from "../interfaces/User.interface";

export const UserSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  img: String
});

export default mongoose.model<UserInterface>("user", UserSchema);

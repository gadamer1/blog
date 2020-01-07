import mongoose, { Schema } from "mongoose";
import { UserInterface } from "../interfaces/User.Interface";

export const UserSchema: Schema = new mongoose.Schema(
  {
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    emailVerified: { type: String, default: false },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    img: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model<UserInterface>("user", UserSchema);

import User from "../models/User.model";
import { ObjectID } from "bson";
import Post from "../models/Post.model";

export async function redundencyEmail(email: string) {
  const ans = await User.find({
    email
  });

  return ans.length === 0 ? false : true;
}

export async function redundencyNickname(nickname: string) {
  const ans = await User.find({
    nickname
  });

  return ans.length === 0 ? false : true;
}

export async function createUser(
  nickname: string,
  email: string,
  password: string
) {
  if ((await redundencyEmail(email)) || (await redundencyNickname(nickname))) {
    return null;
  }
  return await User.create({
    nickname,
    password,
    email
  });
}

export async function loginUser(email: string, password: string) {
  return await User.findOne({
    email,
    password
  }).select("-password");
}

export async function getUserByObjectId(userId: ObjectID) {
  return await User.findById(userId).select("-password");
}

export async function getUserInfoByNickname(nickname: string) {
  const user = await User.findOne({ nickname }).select("-password");
  //@ts-ignore
  const postList = await Post.find({ authorId: user._id, hidden: false });
  return {
    user,
    postList
  };
}

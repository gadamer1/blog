import express from "express";
import { wrapper } from "../utils/wrapper";
import validate from "validate.js";
import { selectCopyObject } from "../utils/jsutils";
import { hash, jwtSign } from "../utils/auth";
import * as userService from "../services/user.service";
import { validateEmail } from "../utils/validates";

export const registerUser = wrapper(async (req, res) => {
  const input = selectCopyObject(req.body, ["nickname", "email", "password"]);
  const invalid = validate(input, {
    nickname: {
      presence: true,
      type: "string"
    },
    email: {
      presence: true,
      type: "string"
    },
    password: {
      presence: true,
      type: "string"
    }
  });
  if (invalid) {
    return res.status(400).json({ success: false, msg: invalid });
  }
  if (!validateEmail(input.email)) {
    return res.status(400).json({ succes: false, msg: "invalid email type" });
  }
  const hashedPassword = hash(input.password);
  const user = await userService.createUser(
    input.nickname,
    input.email,
    hashedPassword
  );
  if (!user) {
    return res.status(409).json({ success: false, msg: "닉네임 혹은 id 중복" });
  }
  const token = jwtSign({ userId: user._id });
  res.cookie("X-Access-Token", token);
  const returnUser = selectCopyObject(user, [
    "_id",
    "nickname",
    "email",
    "emailVerified",
    "admin"
  ]);
  return res.status(200).json({
    success: true,
    "X-Access-Token": token,
    user: returnUser
  });
});

export const loginUser = wrapper(async (req, res) => {
  const input = selectCopyObject(req.body, ["email", "password"]);
  const invalid = validate(input, {
    email: {
      presence: true,
      type: "string"
    },
    password: {
      presence: true,
      type: "string"
    }
  });
  if (invalid) {
    return res.status(400).json({ success: false, msg: invalid });
  }
  if (!validateEmail(input.email)) {
    return res.status(400).json({ succes: false, msg: "invalid email type" });
  }
  const hashedPassword = hash(input.password);
  const user = await userService.loginUser(input.email, hashedPassword);
  if (!user) {
    return res.status(409).json({ success: false, msg: "login failed" });
  }
  const token = jwtSign({ userId: user._id });
  res.cookie("X-Access-Token", token);
  const returnUser = selectCopyObject(user, [
    "_id",
    "nickname",
    "email",
    "admin",
    "emailVerified"
  ]);
  return res.status(200).json({
    success: true,
    "X-Access-Token": token,
    user
  });
});

export const logout = wrapper(async (req, res) => {
  res.clearCookie("X-Access-Token");
  return res.status(200).json({ success: true });
});

// 닉네임으로 user의 정보 불러오기

export const getUserInfoByNickname = wrapper(async (req, res) => {
  const nickname = req.params.id;
  const userInfo = await userService.getUserInfoByNickname(nickname);
  res.status(200).json({ success: true, result: userInfo });
});

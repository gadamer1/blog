import express from "express";
import * as UserController from "../controllers/user.controller";
import * as AuthMiddleware from "../middlewares/auth";
const router = express.Router();

// get user
router.get("/", (req, res, next) => {
  res.send("hi");
});

router.get("/info/:id", UserController.getUserInfoByNickname);

// signUp
router.post("/", UserController.registerUser);

// login
router.post("/login", UserController.loginUser);

router.get("/logout", UserController.logout);

// 로그인 검사
router.get("/is-login", AuthMiddleware.verifyLogin, (req, res) => {
  //@ts-ignore
  return res.status(200).json({ success: true, user: req.user });
});

export default router;

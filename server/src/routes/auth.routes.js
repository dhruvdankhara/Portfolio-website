import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  getCurrentUser,
  changeCurrentPassword,
  updateUser,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);

router.route("/register").post(registerUser);

router.route("/logout").get(logoutUser);

router.get("/me", verifyJWT, getCurrentUser);

router.post("/change-password", verifyJWT, changeCurrentPassword);

router.post("/update-user", verifyJWT, updateUser);

export default router;

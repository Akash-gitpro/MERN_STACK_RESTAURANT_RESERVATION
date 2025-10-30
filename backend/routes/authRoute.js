import express from "express";
import { registerUser, loginUser, changePassword } from "../controller/auth.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change-password", protect, changePassword);

export default router;

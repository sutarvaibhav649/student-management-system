import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

/* ---------- Auth Routes ---------- */
router.post("/signup", register);
router.post("/login", login);

export default router;

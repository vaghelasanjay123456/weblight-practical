import express from "express";
const router = express.Router();
import { router as userRouter } from "./user.js";

router.use('user', userRouter);

export { router };
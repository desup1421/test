import express from "express";
import educationRoutes from "./educationRoutes.js";
import heroRoutes from "./heroRoutes.js";
import authRoutes from './authRoutes.js'

const router = express.Router();

router.use("/education", educationRoutes);
router.use("/hero", heroRoutes);
router.use("/auth", authRoutes)

export default router;

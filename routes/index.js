import express from "express";
import educationRoutes from "./educationRoutes.js";
import heroRoutes from "./heroRoutes.js";
import projectRoutes from "./projectRoutes.js";
import authRoutes from './authRoutes.js'
import contactRoutes from './contactRoutes.js'

const router = express.Router();

router.use("/education", educationRoutes);
router.use("/hero", heroRoutes);
router.use("/project", projectRoutes);
router.use("/auth", authRoutes)
router.use('/contact', contactRoutes)

export default router;

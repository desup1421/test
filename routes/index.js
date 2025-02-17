import express from "express";
import educationRoutes from "./educationRoutes.js";
import heroRoutes from "./heroRoutes.js";
import projectRoutes from "./projectRoutes.js";
import authRoutes from './authRoutes.js'
import contactRoutes from './contactRoutes.js'
import skillRoutes from './skillRoutes.js'

const router = express.Router();

router.use("/education", educationRoutes);
router.use("/hero", heroRoutes);
router.use("/project", projectRoutes);
router.use("/auth", authRoutes)
router.use("/skill", skillRoutes)

router.use('/contact', contactRoutes)

export default router;

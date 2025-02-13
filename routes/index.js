import express from "express";
import educationRoutes from "./educationRoutes.js";
import heroRoutes from "./heroRoutes.js";
import contactRoutes from './contactRoutes.js'

const router = express.Router();

router.use("/education", educationRoutes);
router.use("/hero", heroRoutes);

router.use('/contact', contactRoutes)

export default router;

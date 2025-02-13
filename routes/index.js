import express from "express";
import educationRoutes from "./educationRoutes.js";
import heroRoutes from "./heroRoutes.js";

const router = express.Router();

router.use("/education", educationRoutes);
router.use("/hero", heroRoutes);

export default router;

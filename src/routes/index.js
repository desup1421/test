import express from "express";
import educationRoutes from "./educationRoutes.js";
import userRoutes from "./userRoutes.js"
import contactRouters from "./contactRoutes.js"

const router = express.Router();

router.use("/education", educationRoutes)
router.use("/user", userRoutes);
router.use("/contact", contactRouters); 



export default router;

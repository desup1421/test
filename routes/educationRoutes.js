import express from "express";
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educationController.js";
import { apiKeyAuth } from "../middleware/apikeyMiddleware.js";

const router = express.Router();

router.get("/", apiKeyAuth, getEducation);
router.post("/", apiKeyAuth, createEducation);
router.put("/:id", apiKeyAuth, updateEducation);
router.delete("/:id", apiKeyAuth, deleteEducation);

export default router;

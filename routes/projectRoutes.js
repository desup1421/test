import express from "express";
import {
  createProject,
  getProjects,
  deleteProject,
  getProjectDetail,
  updateProject,
} from "../controllers/projectController.js";
import { uploadMultiple } from "../middleware/uploadImageMiddleware.js";
import { apiKeyAuth } from "../middleware/apikeyMiddleware.js";

const router = express.Router();

router.post("/", apiKeyAuth, uploadMultiple, createProject);
router.get("/", apiKeyAuth, getProjects);
router.delete("/:id", apiKeyAuth, deleteProject);
router.get("/:id", apiKeyAuth, getProjectDetail);
router.put("/:id", apiKeyAuth, uploadMultiple, updateProject);

export default router;

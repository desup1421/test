import express from "express";
import {
  deleteSkill,
  getSkill,
  postSkill,
  updateSkill,
} from "../controllers/skillController.js";
import { uploadSingle } from "../middleware/uploadImageMiddleware.js";
import { apiKeyAuth } from "../middleware/apikeyMiddleware.js";

const router = express.Router();

router.get("/", apiKeyAuth, getSkill);
router.post("/", apiKeyAuth, uploadSingle, postSkill);
router.put("/:id", apiKeyAuth, uploadSingle, updateSkill);
router.delete("/:id", apiKeyAuth, deleteSkill);

export default router;

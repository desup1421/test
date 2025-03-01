import express from "express";
import {
  getHero,
  updateHero,
  createHero,
} from "../controllers/heroController.js";
import { uploadSingle } from "../middleware/uploadImageMiddleware.js";
import { apiKeyAuth } from "../middleware/apikeyMiddleware.js";

const router = express.Router();

router.get("/", apiKeyAuth, getHero);
router.post("/", apiKeyAuth, uploadSingle, createHero);
router.put("/:id", apiKeyAuth, uploadSingle, updateHero);

export default router;

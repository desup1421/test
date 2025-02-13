import express from "express";
import {
  getHero,
  updateHero,
  createHero,
} from "../controllers/heroController.js";
import { uploadSingle } from "../middleware/uploadImageMiddleware.js";

const router = express.Router();

router.get("/", getHero);
router.post("/", uploadSingle, createHero);
router.put("/", uploadSingle, updateHero);

export default router;

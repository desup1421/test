import express from "express";
import {
  deleteContact,
  getContact,
  postContact,
} from "../controllers/contactController.js";
import { apiKeyAuth } from "../middleware/apikeyMiddleware.js";

const router = express.Router();

router.get("/", apiKeyAuth, getContact);
router.post("/", apiKeyAuth, postContact);
router.delete("/:id", apiKeyAuth, deleteContact);

export default router;

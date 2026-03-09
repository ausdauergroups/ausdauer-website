import express from "express";
import { submitApplication } from "../controllers/applicationController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("resume"), submitApplication);

export default router;
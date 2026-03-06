import express from "express";
import verifyAdmin from "../Middleware/auth.middleware.js";
import { GetProjectDetail, GetProjectsData, UploadProject } from "../Controller/projects.controller.js";
import UploadImage from "../Middleware/Multer.js";

const router = express.Router();

router.post("/upload", UploadImage.fields([
    {name: "thumbnail", maxCount: 1},
    {name: "screenshots", maxCount: 30}
]), verifyAdmin, UploadProject)

router.get("/get-projects-data", GetProjectsData)
router.get("/get-project-data/:slug", GetProjectDetail)

export default router
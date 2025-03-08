const express = require("express");
const router = express.Router();

const {ProjectUpload, Checking} = require("../Controller/ProjectController");
const UploadProjectImage = require("../Middleware/Multer");

router.post("/ProjectUpload", UploadProjectImage.array("projectImages") , ProjectUpload);
router.get("/Checking", Checking)

module.exports = router;
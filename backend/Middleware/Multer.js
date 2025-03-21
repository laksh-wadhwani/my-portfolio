const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const UploadProjectImage = multer({ storage });

module.exports = UploadProjectImage
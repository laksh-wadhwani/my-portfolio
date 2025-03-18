const multer = require("multer");
const path = require("path");

const projectStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + req.body.projectName + "_" + file.originalname);
    }
});

const UploadProjectImage = multer({ storage: projectStorage });

module.exports = UploadProjectImage
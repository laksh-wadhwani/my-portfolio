import multer from "multer";

const storage = multer.memoryStorage();

const UploadImage = multer({ storage });

export default UploadImage
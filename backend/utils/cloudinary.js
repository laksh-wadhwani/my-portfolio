import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv";

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


export const uploadToCloudinary = fileBuffer => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream((error, result) => {
      if(error) { 
        console.log("Cloudinary upload error: ",error) 
        reject(error) 
      }
      else resolve(result.secure_url)
    }).end(fileBuffer)
  })
}
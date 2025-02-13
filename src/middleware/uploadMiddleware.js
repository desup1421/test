import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// Konfigurasi penyimpanan di Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Folder di Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});

const upload = multer({ storage });

export const uploadSingle = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    next();
  });
};

export const uploadMultiple = (req, res, next) => {
  upload.array("images")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    next();
  });
}
import multer from 'multer';
import { uploadToCloudinary } from '../middleware/cloudinary/cloudinary.js';

// Multer Configuration - use memoryStorage instead of diskStorage
const storage = multer.memoryStorage(); // Store files in memory instead of disk

// Allowed file types (images and videos)
const allowedMimeTypes = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp', // Images
    'video/mp4', 'video/mpeg', 'video/webm', 'video/quicktime', // Videos
];

// Multer file filter to validate file types
const fileFilter = (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Invalid file type. Only media files are allowed.'), false); // Reject the file
    }
};

// Multer instance with memory storage
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 50 * 1024 * 1024, // Optional: Limit file size to 50MB
    },
});

export default upload;

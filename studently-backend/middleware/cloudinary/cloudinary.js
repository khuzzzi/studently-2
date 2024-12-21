import cloudinary from 'cloudinary';

// Cloudinary configuration (replace with your Cloudinary credentials)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to upload media to Cloudinary
export const uploadToCloudinary = async (req, res, next) => {
    try {
        const mediaFiles = req.files;

        // Upload each file to Cloudinary
        const uploadPromises = mediaFiles.map((file) => {
            return new Promise((resolve, reject) => {
                cloudinary.v2.uploader.upload_stream(
                    { resource_type: 'auto' }, // Auto detects image or video
                    (error, result) => {
                        if (error) reject(error);
                        resolve(result);
                    }
                ).end(file.buffer); // Use .end to upload the file buffer
            });
        });

        // Wait for all files to upload
        const uploadedFiles = await Promise.all(uploadPromises);

        // Attach the uploaded files URLs to the request (you can store them in DB)
        req.uploadedFiles = uploadedFiles;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        return res.status(500).json({ message: 'Error uploading files to Cloudinary' });
    }
};

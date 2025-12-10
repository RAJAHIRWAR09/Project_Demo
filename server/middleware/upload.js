const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

// Ensure upload directory exists
const uploadDir = 'public/uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});

const upload = multer({ storage: storage });

const resizeImage = async (req, res, next) => {
    if (!req.file) return next();

    // Resize image to 450x350 as requested in bonus
    const filePath = req.file.path;
    const filename = req.file.filename;
    const outputFilename = 'resized-' + filename;
    const outputPath = path.join(uploadDir, outputFilename);

    try {
        await sharp(filePath)
            .resize(450, 350, {
                fit: 'cover'
            })
            .toFile(outputPath);

        // Delete original file to save space? Or keep it?
        // Instructions say "stored in backend", implies the cropped one.
        // I'll delete the original.
        fs.unlinkSync(filePath);

        // Update req.file to point to the new file
        req.file.path = outputPath;
        req.file.filename = outputFilename;
        next();
    } catch (err) {
        console.error('Error resizing image:', err);
        next();
    }
};

module.exports = { upload, resizeImage };

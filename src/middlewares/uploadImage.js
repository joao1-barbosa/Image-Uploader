const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = process.cwd() + '/public/upload';
      if (!fs.existsSync(uploadDir)) {
        // if not create directory
        fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.floor(Math.random() * 1e9);
      cb(null,
        'image-'+
        uniqueSuffix +
        path.extname(file.originalname)
      );
    },
});

module.exports = multer({
    storage: storage,
});

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'uploads/';
      // Ensure the upload directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });
  
  export const upload = multer({ storage: storage });
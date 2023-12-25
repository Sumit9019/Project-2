import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.fcrc1g0.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"]; // Corrected typo: 'image/jpg' to 'image/jpeg'

        if (match.indexOf(file.mimetype) === -1) { // Fixed typo: 'file.memeType' to 'file.mimetype'
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

const upload = multer({ storage: storage }); // Create multer instance with configured storage

export default upload; // Export the configured multer instance
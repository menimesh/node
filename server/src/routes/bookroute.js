import { Router } from "express";
import bookModel from "../models/bookmodel.js";
import BookController from "../controllers/bookControllers.js";
import multer from "multer";

const router = Router();

let imageName;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename: function (req, file, cb) {
    imageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim();
    req.imageName = imageName;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });
const bookController = new BookController();

router.post("/add", upload.single("image"), (req, res) => {
  bookController.addBook(req, res, imageName);
});
router.get("/search/:id", (req, res) => {
  const { id } = req.params;
  bookController.getBookById(req, res, id);
});
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  bookController.updateBook(req, res, id);
});
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  bookController.deleteBook(req, res, id);
});
router.get("/find/all", (req, res) => {
  bookController.searchBook(req, res);
});
export default router;

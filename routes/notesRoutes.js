import express, { Router } from "express";
import { getAllnotes } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllnotes);
router.post("/", (req, res) => {
  res.status(201).json({ message: "this is from post request " });
});
router.put("/", (req, res) => {
  res.status(201).json({ message: "this is from put request " });
});
export default router;

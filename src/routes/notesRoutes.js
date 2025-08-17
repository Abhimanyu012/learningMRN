import express, { Router } from "express";
import { createNote, deleteNote, getAllnotes, updateNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.post("/", createNote);
router.get("/",getAllnotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/:id",getAllnotes);

export default router;

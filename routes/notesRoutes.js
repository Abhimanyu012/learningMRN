import express, { Router } from "express";
import { createNotes, getAllnotes, updateNotes } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllnotes);
router.post("/", createNotes);
router.put("/", updateNotes);

export default router;

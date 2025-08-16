import express, { Router } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "this is from get request " });
});
router.post("/", (req, res) => {
  res.status(201).json({ message: "this is from post request " });
});
router.put("/", (req, res) => {
  res.status(201).json({ message: "this is from put request " });
});
export default router;

import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
connectDb();
const app = express();

app.use(express.json());

app.use("/api/notes", notesRoutes);

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "hello this is from / " });
// });
// app.post("/", (req, res) => {
//   res.status(201).json({ message: "hello this is from / " });
// });

// app.put("/", (req, res) => {
//   res.status(201).json({ message: "hello this is updated  from / " });
// });

app.listen(5001, () => [
  console.log("hello server is created and running successfully"),
]);

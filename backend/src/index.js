import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

import rateLimiter from "./middleware/rateLimitter.js";

const app = express();

app.use(express.json());

app.use(rateLimiter); //add this before the route

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "hello this is from / " });
// });
// app.post("/", (req, res) => {
//   res.status(201).json({ message: "hello this is from / " });
// });

// app.put("/", (req, res) => {
//   res.status(201).json({ message: "hello this is updated  from / " });
// });
app.use("/api/notes", notesRoutes);

connectDb().then(() => {
  //first database connet then only server will start listening
  app.listen(5001, () => {
    console.log("hello server is created and running successfully");
  });
});

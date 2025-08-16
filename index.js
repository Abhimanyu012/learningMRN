import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello this is from / ");
});

app.listen(5001, () => [
  console.log("hello server is created and running successfully"),
]);

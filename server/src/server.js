import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home route is loading!!");
});

app.listen(3005);

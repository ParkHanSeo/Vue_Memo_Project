const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const memos = [];
const database = require("./database");

app.use(bodyParser.json());

app.get("/api/memos", async (req, res) => {
  const result = await database.run("SELECT * FROM MEMOS;");
  res.send(result);
});

app.post("/api/memos", async (req, res) => {
  await database.run(
    `INSERT INTO memos (content) VALUES ('${req.body.content}')`
  );
  const result = await database.run("SELECT * FROM MEMOS;");
  // memos.push(req.body.content);
  res.send(result);
});

app.put("/api/memos/:i", (req, res) => {
  memos[req.params.i] = req.body.content;
  res.send(memos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

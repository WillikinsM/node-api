const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  const { call } = req.params;
  const { body } = req.body;

  res.send({
    test: "it worked" + { body },
    test2: "it worked ${body}",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

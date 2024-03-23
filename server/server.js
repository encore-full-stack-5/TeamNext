const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors"); //

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "이것은 서버에서 출력한 구문입니다." });
});

app.listen(port, () => {
  console.log(`Example appsfd listening on port ${port}`);
});

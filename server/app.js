const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

app.get("/api", (req, res) => {
  console.log("jsem tu")
  res.send({ message: "Hello from Express!" });
});
app.listen(port, () => console.log(`Listening on port ${port}`));

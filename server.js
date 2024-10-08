const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 4001;
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

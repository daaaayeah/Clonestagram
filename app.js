const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const port = 3000;
const API_ROOT = "/api/v1/";

const user = require("./api/user/user");
const post = require("./api/post/post");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(API_ROOT, user);
app.use(API_ROOT, post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

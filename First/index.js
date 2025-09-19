require('dotenv').config()
console.log("Radhakrishna");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/x", (req, res) => {
    res.send("Welcome to x by Elon Musk")
})

app.get("/friend", (req, res) => {
    res.send({name: "Abhinav", age: 21, city: "Bokaro"})
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});

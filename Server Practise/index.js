const express = require("express");
const app = express();

app.use("/server", (req, res, next) => {
  console.log("You have accesed admin url");
  next();
});

app.get("/server/:first", (req, res, next) => {
  const dynamic = req.params.first;
    res.send(`You passed: ${dynamic}`);
    next()
});

app.get("/server-1/obj", (req, res) => {
    res.send({
        Name: "Ayush",
        Age: 20,
        Gender: "Male",
        "Pet-Name": "Sujal"
  }, ["One", 2, "Three"]);
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});

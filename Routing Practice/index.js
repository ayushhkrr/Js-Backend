const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
app.use(express.json());
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  username: { type: String, unique: true, required: true },
  age: Number,
});

mongoose
  .connect("mongodb://127.0.0.1:27017/myDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const User = mongoose.model("User", userSchema);

app.post("/server", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/server", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/server/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
});

app.patch("/server/:id", async (req, res) => {
  try {
    const update = await User.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!update) {
      return res.send("User not found");
    }
    res.send(update);
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/server/:id", async (req, res) => {
  try {
    const entireUpdate = await User.findOneAndReplace(
      { id: req.params.id },
      req.body,
      {new: true, runValidators: true}
    )
    res.send(entireUpdate)
  } catch (err) {
    res.send(err.message)
  }
})

app.delete("/server/:id", async (req, res) => {
    try {
        const clear = await User.findOneAndDelete({ id: req.params.id })
        res.send(`User with Id ${req.params.id} has been deleted succesfully`)
    } catch (err) {
        res.send(err.message);
        
    }
})

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

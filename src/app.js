const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const { User } = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Shahrukh",
    lastName: "Khan",
    emailId: "shahrukh@gmail.com",
    password: "Shahrukh@123",
  });
  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(400).send("Some error occurred ", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Could not connect to database");
  });

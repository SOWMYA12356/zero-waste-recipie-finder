const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = []; // temporary storage

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashed });
  res.json({ message: "Signup successful!" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid password" });
  const token = jwt.sign({ email }, "secretkey");
  res.json({
  message: "Login successful",
  token,
  user: { name: user.name, email: user.email }
});
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

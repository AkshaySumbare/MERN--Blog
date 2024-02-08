import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ Message: "All fields are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("Signup successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

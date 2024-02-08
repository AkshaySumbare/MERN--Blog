import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import errorHandler from '../utils/error.js'


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, 'All fiels are required'));
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
   next(error);
  }
};

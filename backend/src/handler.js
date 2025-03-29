const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const faker = require("@faker-js/faker").faker;
const axios = require("axios");
const pool = require("./db");

const JWT_SECRET = "supersecretkey";

const generateToken = (user) =>
  jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

const getUsers = async (_, h) => {
  try {
    const [users] = await pool.query("SELECT id, name, email FROM users");
    return h.response({ status: "success", data: users }).code(200);
  } catch (error) {
    console.error("Get users error:", error);
    return h
      .response({ status: "error", message: "Failed to fetch users" })
      .code(500);
  }
};

const registerUser = async (req, h) => {
  try {
    const { name = faker.person.fullName(), email, password } = req.payload;
    const formattedEmail =
      email || `${name.toLowerCase().replace(/\s+/g, "")}@example.com`;
    const generatedPassword =
      name
        .split(" ")
        .map((part) => part.toLowerCase())
        .join("") + "123";
    const hashedPassword = await bcrypt.hash(password || generatedPassword, 10);

    const [[existingUser]] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [formattedEmail]
    );
    if (existingUser)
      return h
        .response({ status: "fail", message: "User already exists" })
        .code(400);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, formattedEmail, hashedPassword]
    );
    return h
      .response({
        status: "success",
        message: "User registered",
        data: { id: result.insertId, name, email: formattedEmail },
      })
      .code(201);
  } catch (error) {
    console.error("Register Error:", error);
    return h.response({ status: "error", message: "Server error" }).code(500);
  }
};

const loginUser = async (req, h) => {
  try {
    const { email, password } = req.payload;
    if (!email || !password)
      return h
        .response({
          status: "fail",
          message: "Email and password are required",
        })
        .code(400);

    const [[user]] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return h
        .response({ status: "fail", message: "Invalid email or password" })
        .code(401);
    }

    const token = generateToken(user);
    return h
      .response({
        status: "success",
        message: "Login successful",
        data: { id: user.id, name: user.name, email: user.email, token },
      })
      .code(200);
  } catch (error) {
    console.error("Login Error:", error);
    return h.response({ status: "error", message: "Server error" }).code(500);
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
};

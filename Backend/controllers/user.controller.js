import User from "../models/user.model.js";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.services.js";
import * as userService from "../services/user.services.js";

export async function createUserController(req, res) {
  try {
    const { email, password } = req.body;
    const user = await createUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send(error.message);
  }
}
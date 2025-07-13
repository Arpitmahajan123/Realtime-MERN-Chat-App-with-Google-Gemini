import User from "../models/user.model";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.services";
import userService from "../services/user.services";

export const createUserController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {    
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.createUser(req.body);
        const token = user.generateJWT();
        res.status(201).send({user, token });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).send({ error: "Internal Server Error" });
        }
}

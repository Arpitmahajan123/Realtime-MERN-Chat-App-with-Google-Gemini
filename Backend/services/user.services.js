import User from "../models/user.model.js";
import UserModel from "../models/user.model.js";


export const createUser = async (email, password) => {
    
    if (!email || !password) {
        throw new Error("Email and password are required");
    }


    const user = await UserModel.create({
        email,
        password: await UserModel.hashPassword(password)
    });

    
    return user;

};
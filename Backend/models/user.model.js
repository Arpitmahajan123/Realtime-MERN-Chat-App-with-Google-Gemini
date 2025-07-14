import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [5, 'Email must be at least 5 characters long'],
        maxlength: [50, 'Email must be at most 50 characters long'],
    },

    password: {
        type: String,
        required: true,
        select : false, // Exclude password from queries by default
        trim: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [1024, 'Password must be at most 1024 characters long'],

    }
}); 

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


// Generate JWT token

userSchema.methods.generateJWT = function () {
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET);
    
}


const User = mongoose.model('User', userSchema);


export default User;
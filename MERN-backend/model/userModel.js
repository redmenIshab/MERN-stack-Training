import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        
    },
    email: {
        type: String,
      
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;
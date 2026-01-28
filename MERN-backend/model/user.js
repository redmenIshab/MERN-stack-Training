import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: {
    type: String,
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
  },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;

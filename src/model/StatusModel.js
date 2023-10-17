import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
        unique: true,
    },
    Password: {
        type: String,
        require: true,
    },
    Profile: {
        type: String,
        require: false,
    }
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
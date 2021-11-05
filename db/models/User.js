const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
});

module.exports = model("User", UserSchema);
import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        default: "Unnamed"
    },
},{timestamps: true});

const User = models.user || model("user", userSchema);

export default User;
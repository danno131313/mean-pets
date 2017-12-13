const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
});

mongoose.model("User", UserSchema);
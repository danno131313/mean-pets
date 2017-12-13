const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: String,
    age: Number,
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

mongoose.model("Pet", PetSchema);
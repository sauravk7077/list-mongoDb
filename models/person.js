const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema

let PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date
    }
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;
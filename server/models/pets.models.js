const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({//Creates objects that are placed within the database, with key value pairs corresponding to inputs.
    name: {type: String,
    required: [true, "Pet Name is Required."],
    minlength: 3},

    type: {type: String,
    required: [true, "Pet Type is Required."],
    minlength: 3},

    description: {type: String,
    required: [true, "A Description of the Pet is Required."],
    minlength: 3},

    skill1: {type: String},

    skill2: {type: String},

    skill3: {type: String}
});


const Pet = mongoose.model("Pet", PetSchema);
/*
PetSchema.pre("validate", function() {
    // check if this.name already in db
    next()
});
*/

module.exports = Pet;
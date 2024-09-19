const mongoose = require('mongoose');

//defining a schema that defines the structure of an appointment document in MongoDB collection
const appointmentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required: true 
    },

    description: {
        type: String,
        required: false 
    },

    isConfirmed: {
        type: Boolean,
        default: false
    }

});


//creating a model in my MongonDB data base based on the appointmentSchema we defined earlier 
const Appointment = mongoose.model('Appointment', appointmentSchema);

// exporting the Appointment model 
module.exports = Appointment;



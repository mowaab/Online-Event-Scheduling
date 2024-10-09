import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,        
    },

    title:
    {
        type: String,
        required: true,
    },

    date:
    {
        type: Date,
        required: true,
    },

    time:
    {
        type: String,
        required: true,
    },

    description: 
    {
        type: String,
        required: false
    },

    status: 
    {
        type: String,
        enum: ['pending', 'confirmed', 'canceled'],
        default: 'pending'
    }

    
}, {timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment; 
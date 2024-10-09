import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";


export const makeAppointment = async (req,res) => {
    const{user, title, date, time, description, status} = req.body
    if(!user || !title || !time)
    {
        return res.status(400).json({message:"Title and Time must be selected"})
    }
    try
    {
        const appointment = await Appointment.create({user, title, date, time, description, status})
        res.status(200).json(appointment)
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
    
}

export const getUserAppointments = async (req, res) => {
    const { userId } = req.params; // Assuming user ID is passed as a URL parameter
    
    try {
        const appointments = await Appointment.find({ user: userId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAppointment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Appointment does not exist!"})
    }

    const appointment = await Appointment.findByIdAndDelete({_id: id})

    if(!appointment)
    {
        return res.status(400).json({error:"Appointment does not exist!"})
    }

    res.status(200).json({appointment})
};

export const updateAppointment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Appointment does not exist!"})
    }

    const appointment = await Appointment.findByIdAndUpdate({_id: id})

    if(!appointment)
    {
        return res.status(400).json({error:"Appointment does not exist!"})
    }

    res.status(200).json({appointment})
};


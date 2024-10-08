import Appointment from "../models/Appointment.js";

const makeAppointment = async (req,res) => {
    const{user, title, date, time, description, status} = req.body
    if(!user || !title || !time)
    {
        return res.status(400).json({message:"Title and Time must be selected"})
    }
    try
    {
        const appointment = Appointment.create({user, title, date, time, description, status})
        res.status(200).json(appointment)
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
    
}

export default makeAppointment;

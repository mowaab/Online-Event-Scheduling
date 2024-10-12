import express from "express";
import Appointment from "../models/Appointment.js";
import User from "../models/User.js";
import {makeAppointment, deleteAppointment, updateAppointment, getUserAppointments} from "../controllers/appoiController.js"

const router = express.Router();

router.post('/', makeAppointment)

// Endpoint to fetch all appointments for a user
router.get('/:userId', getUserAppointments); // Add this line


router.delete('/:id', deleteAppointment)

//router.put('/:id', updateAppointment)

export default router;
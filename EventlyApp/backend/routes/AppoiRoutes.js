import express from "express";
import Appointment from "../models/Appointment.js";
import User from "../models/User.js";
import {makeAppointment, deleteAppointment, updateAppointment} from "../controllers/appoiController.js"

const router = express.Router();

router.post('/', makeAppointment)

router.delete('/:id', deleteAppointment)

router.patch('/:id', updateAppointment)

export default router;
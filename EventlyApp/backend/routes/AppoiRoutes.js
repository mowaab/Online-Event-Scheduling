import express from "express";
import Appointment from "../models/Appointment.js";
import User from "../models/User.js";
import makeAppointment from "../controllers/appoiController.js"

const router = express.Router();

router.post('/', makeAppointment)

export default router;
import express from "express";
import zod from "zod";
import moment from "moment";
import { Appointment } from "../db.js";
import { authMiddleware } from "../middleware.js";
import { Query } from "../db.js";

const router = express.Router();

const appointmentBody = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    appointmentDate: zod.string(),
    comments: zod.string().max(500),
});

router.post("/appointments", async (req, res) => {
    try {
        const { name, email, appointmentDate, comments } = appointmentBody.parse(req.body);
        
        const dateRegex = /^\d{2}-\d{2}-\d{2}$/; 
        if (!dateRegex.test(appointmentDate)) {
            return res.status(400).json({ message: "Invalid date format. Use DD-MM-YY." });
        }

        const [day, month, year] = appointmentDate.split('-').map(Number);
        const fullYear = year < 50 ? 2000 + year : 1900 + year; 

        const parsedDate = new Date(Date.UTC(fullYear, month - 1, day)); 

        console.log("Parsed Date: ", parsedDate);

        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: "Invalid date." });
        }

        const currentDate = new Date();
        if (parsedDate < currentDate) {
            return res.status(400).json({ message: "Appointment cannot be scheduled for a past date." });
        }

        const appointment = await Appointment.create({
            name,
            email,
            appointmentDate: parsedDate, 
            comments,
            status: "pending",
        });

        console.log("Stored Appointment: ", appointment);

        res.status(201).json({ message: 'Appointment created successfully' });
    } catch (err) {
        console.error("Error creating appointment: ", err);
        res.status(500).json({ message: 'Failed to create appointment', error: err.message });
    }
});


router.get("/appointments", authMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ createdAt: -1 });

        const formattedAppointments = appointments.map(appointment => ({
            ...appointment.toObject(), 
            appointmentDate: moment(appointment.appointmentDate).format("YYYY-MM-DD") 
        }));

        res.status(200).json({ appointments: formattedAppointments });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch appointments', error: err.message });
    }
});

const querybody = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    subject: zod.string(),
    comments: zod.string().max(500),
});

router.post("/queries", async (req, res) => {
    try {
        const { name, email, subject, comments } = querybody.parse(req.body);
        const query = await Query.create({
            name,
            email,
            subject,
            comments,
            status: "new",  
        });
        await query.save();

        res.status(201).json({ message: 'Query created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create Query', error: err.message });
    }
});

router.get("/queries", authMiddleware, async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.status(200).json({ queries });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch queries', error: err.message });
    }
});

export default router;

import { Router } from 'express';
const router = Router();
import jwt from "jsonwebtoken";
import zod from "zod";
import { AdminUser, Appointment, Query } from "../db.js";
import { authMiddleware } from "../middleware.js";
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const adminUserSignUpBody = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    username: zod.string(),
    password: zod.string().min(6),
});

router.post("/adminUsers/signup", async (req, res) => {
    try {
        const result = adminUserSignUpBody.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: result.error.errors[0].message });
        }

        const { firstname, lastname, username, password } = result.data;

        const adminUser = await AdminUser.create({ firstname, lastname, username, password });
        await adminUser.save();

        console.log("User created:", adminUser); 

        const token = jwt.sign({ userId: adminUser.id, username: adminUser.username }, JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: 'Admin user created successfully', token });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create admin user', error: err.message });
    }
});

const adminUserLoginInput = zod.object({
    username: zod.string(),
    password: zod.string().min(6),
});

router.post("/adminUsers/login", async (req, res) => {
    try {
        const result = adminUserLoginInput.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({ message: result.error.errors[0].message });
        }

        const { username, password } = result.data;

        console.log("Attempting login for:", username); 

        const adminUser = await AdminUser.findOne({ username });
        console.log("User found:", adminUser); 

        if (!adminUser) {
            return res.status(404).json({ message: "User not found." });
        }

        if (adminUser.password !== password) {
            return res.status(400).json({ message: "Invalid username or password." });
        }

        const token = jwt.sign({ userId: adminUser.id, username: adminUser.username }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error("Error during login:", err); 
        res.status(500).json({ message: 'Failed to login', error: err.message });
    }
});

router.get("/adminUsers", authMiddleware, async (req, res) => {
    try {
        const adminUsers = await AdminUser.find();
        res.status(200).json({ adminUsers });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch admin users', error: err.message });
    }
});

router.put("/appointments/:id/status", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found." });
        }
        res.status(200).json({ message: "Appointment status updated successfully.", appointment });
    } catch (err) {
        res.status(500).json({ message: "Failed to update appointment status", error: err.message });
    }
});


router.put("/queries/:id/status", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const query = await Query.findByIdAndUpdate(id, { status }, { new: true });
        if (!query) {
            return res.status(404).json({ message: "Query not found." });
        }
        res.status(200).json({ message: "Query status updated successfully.", query });
    } catch (err) {
        console.error("Error updating query status:", err); // Log the error for debugging
        res.status(500).json({ message: "Failed to update query status", error: err.message });
    }
});

export default router;
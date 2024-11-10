import { Router } from 'express';
import adminRouter from "./admin.js";
import appointmentRouter from "./appointment.js";

const router = Router();

router.use("/admin", adminRouter);
router.use("/appointment", appointmentRouter);

export default router;
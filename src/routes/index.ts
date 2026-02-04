import { Router } from "express";
import landingRoutes from './landing.routes';

const router = Router();

router.use('/landing', landingRoutes)

export default router
import { Router } from "express";

import { getLandingContent, getPartners, getMembers } from '../controllers/landing.controller'

const router = Router();

router.get('/content', getLandingContent);

router.get('/partners', getPartners);

router.get('/members', getMembers);

export default router;
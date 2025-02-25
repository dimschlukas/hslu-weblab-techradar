import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/isAdminMiddleware.js';
import { getLogs } from '../controllers/loggingController.js';

const router = express.Router();

router.get('/', protect, isAdmin, getLogs);

export default router;

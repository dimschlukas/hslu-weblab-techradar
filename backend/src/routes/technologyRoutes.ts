import express from 'express';
import {
  getTechnologies,
  getTechnology,
  createTechnology,
  updateTechnology,
  deleteTechnology
} from '../controllers/technologyController.js';
import { protect } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/isAdminMiddleware.js';

const router = express.Router();

router.get('/', protect, getTechnologies);
router.get('/:id', protect, getTechnology);
router.post('/', protect, isAdmin, createTechnology);
router.put('/:id', protect, isAdmin, updateTechnology);
router.delete('/:id', protect, isAdmin, deleteTechnology);

export default router;

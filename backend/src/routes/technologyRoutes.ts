import express from 'express';
import {
  getTechnologies,
  getTechnology,
  createTechnology,
  updateTechnology,
  deleteTechnology
} from '../controllers/technologyController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getTechnologies);
router.get('/:id', protect, getTechnology);
router.post('/', protect, createTechnology);
router.put('/:id', protect, updateTechnology);
router.delete('/:id', protect, deleteTechnology);

export default router;

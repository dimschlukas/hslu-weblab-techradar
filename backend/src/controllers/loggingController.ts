import { Request, Response } from 'express';
import LoginLog from '../models/loginLogModel.js';

export const getLogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const logs = await LoginLog.find().sort({ timestamp: -1 }).skip(skip).limit(limit);
    const total = await LoginLog.countDocuments();

    res.json({ logs, total, page, limit });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

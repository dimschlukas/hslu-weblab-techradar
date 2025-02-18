import { Request, Response, NextFunction } from 'express';
import { isAdminRequest } from '../utils/isAdmin.js';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (isAdminRequest(req)) {
    next();
  } else {
    res.status(403).json({ error: 'Access denied, admin only' });
  }
};

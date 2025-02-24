import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel.js';
import { generateToken, verifyToken } from '../utils/jwt.js';
import { isApproved } from '../utils/isApproved.js';

interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = verifyToken(token);

      // Fetch user details
      const user = await User.findById(decoded.id).select('-password');

      if (!user) {
        res.status(401).json({ error: 'Not authorized, user not found' });
        return;
      }

      // Ensure user is an employee
      if (!isApproved(user)) {
        res.status(403).json({ error: 'Not authorized, pending approval by admin' });
        return;
      }

      // Generate a fresh token
      const newToken = generateToken(user.id, user.email, user.role);
      res.setHeader('Authorization', `Bearer ${newToken}`);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ error: 'Not authorized, no token' });
  }
};

import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel.js';
import { generateToken, verifyToken } from '../utils/jwt.js';

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
      const newToken = generateToken(decoded.id, decoded.email, decoded.role);
      res.setHeader('Authorization', `Bearer ${newToken}`);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ error: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ error: 'Not authorized, no token' });
  }
};

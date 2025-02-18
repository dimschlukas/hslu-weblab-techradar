import { Request, Response } from 'express';
import User from '../models/userModel.js';
import { comparePass, hashPass } from '../utils/passwort.js';
import { generateToken } from '../utils/jwt.js';
import LoginLog from '../models/loginLogModel.js';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({
      email: { $regex: email, $options: 'i' }
    });

    if (userExists) {
      const message = 'User already exists';
      res.status(400).json({ message });
      logging('register', false, email, req.ip, message);
      return;
    }

    const hashedPassword = await hashPass(password);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.setHeader(
      'Authorization',
      `Bearer ${generateToken(user._id.toString(), user.email, user.role)}`
    );
    res.status(201).send();
    logging('register', true, email, req.ip);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: { $regex: email, $options: 'i' }
    });

    if (!user || !(await comparePass(password, user.password))) {
      const message = 'Invalid email or password';
      res.status(400).json({ message });
      logging('login', false, email, req.ip, message);
      return;
    }
    res.setHeader(
      'Authorization',
      `Bearer ${generateToken(user._id.toString(), user.email, user.role)}`
    );
    res.status(204).send();
    logging('login', true, email, req.ip);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

function logging(
  type: string,
  success: boolean,
  email: string,
  ipAddress?: string,
  reason?: string
) {
  const log = new LoginLog({ type, email, ipAddress, success, reason });
  log.save();
}

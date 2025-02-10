import { Request, Response } from 'express';
import User from '../models/userModel.js';
import { comparePass, hashPass } from '../utils/passwort.js';
import { generateToken } from '../utils/jwt.js';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role } = req.body;
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await hashPass(password);
    console.log(hashedPassword);
    const user = new User({ email, password: hashedPassword, role });
    await user.save();

    res.setHeader('Authorization', `Bearer ${generateToken(user._id.toString())}`);
    res.status(201).json({
      id: user._id,
      email: user.email,
      role: user.role
    });
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user || !(await comparePass(password, user.password))) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    res.setHeader('Authorization', `Bearer ${generateToken(user._id.toString())}`);
    res.status(201).json({
      id: user._id,
      email: user.email,
      role: user.role
    });
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

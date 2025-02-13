import { Request, Response } from 'express';
import Technology from '../models/technologyModel.js';

export const getTechnologies = async (req: Request, res: Response): Promise<void> => {
  try {
    const technologies = await Technology.find();
    res.json(technologies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
      res.status(404).json({ message: `Technology not found` });
      return;
    }
    res.json(technology);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = new Technology(req.body);

    const technologyExists = await Technology.findOne({
      name: { $regex: technology.name, $options: 'i' }
    });

    if (technologyExists) {
      res.status(400).json({ message: 'Technology already exists' });
      return;
    }
    await technology.save();
    res.status(201).json(technology);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

export const updateTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!technology) {
      res.status(404).json({ error: 'Technology not found' });
      return;
    }
    res.status(200).json(technology);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

export const deleteTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = await Technology.findByIdAndDelete(req.params.id);
    if (!technology) {
      res.status(404).json({ error: 'Technology not found' });
      return;
    }
    res.status(200).json(technology);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

import { Request, Response } from 'express';
import Technology from '../models/technologyModel.js';
import { isAdminRequest } from '../utils/isAdmin.js';

export const getTechnologies = async (req: Request, res: Response): Promise<void> => {
  try {
    const query: any = { ...req.query };
    if (!isAdminRequest(req)) {
      query.published = true;
    }
    const technologies = await Technology.find(query);
    res.json(technologies);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
      res.status(404).json({ message: `Technology not found` });
      return;
    }

    if (!isAdminRequest(req) && technology.published === false) {
      res.status(403).json({ message: 'Access denied, unpublished technology' });
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

    if (technology.published) {
      technology.publishedAt = new Date();
    }

    await technology.save();
    res.status(201).json(technology);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const updateTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!technology) {
      res.status(404).json({ message: `Technology not found` });
      return;
    }

    if (technology.published && !technology.publishedAt) {
      technology.publishedAt = new Date();
    }

    await technology.save();
    res.status(200).json(technology);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const deleteTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const technology = await Technology.findByIdAndDelete(req.params.id);
    if (!technology) {
      res.status(404).json({ message: 'Technology not found' });
      return;
    }
    res.status(200).json(technology);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

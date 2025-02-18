import { Request } from 'express';

export const isAdminRequest = (req: Request): boolean => {
  const user = (req as any).user;
  return user?.role === 'CTO' || user?.role === 'Tech Lead';
};

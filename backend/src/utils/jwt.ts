import jwt, { JwtPayload } from 'jsonwebtoken';

export const generateToken = (id: string, email: string, role: string): string => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
};

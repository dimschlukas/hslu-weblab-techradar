export const isApproved = (user: any): boolean => {
  return user.role === 'Employee' || user.role === 'CTO' || user.role === 'Tech Lead';
};

import bcrypt from 'bcrypt';

export const hashPass = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePass = async (password: string, hashPass: string) => {
  try {
    return await bcrypt.compare(password, hashPass);
  } catch (error) {
    console.log(error);
  }
};

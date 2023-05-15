import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  return user;
};

export const getUsersFromDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 });
  return user;
};

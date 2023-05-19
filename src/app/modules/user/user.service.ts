import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload); //User--> class and user--> inastance
  await user.save(); //build in inastance methods
  //   custom instance method
  user.fullName(); //custom instance methods
  console.log(user.fullName());

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
// export const getAdminUserFromDb=async(payload:string):Promise<IUser[]>=>{
//   const admins =
// }

import User from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: "12345660u0000",
    role: "Student",
    password: "password111",
    name: {
      firstName: "Abdul",
      middleName: "Alim",
      lastName: "Khan",
    },
    dateOfBirth: "09/09/2009",
    gender: "male",
    email: "shahin@gmail.com",
    contactNo: "01977788888",
    emergencyContactNo: "0138877656554",
    presentAddress: "Uganda",
    permanentAddress: "Japan",
  });
  await user.save();
  console.log(user);
};

import Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export const loginSchema = Yup.object()
  .shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

export const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string().min(8).required("new password is required."),
  oldPassword: Yup.string().required("old passwor is required."),
});

export const updateUserSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  gender: Yup.string(),
});

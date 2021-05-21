import { keyframes } from 'styled-components';
import * as yup from 'yup';

export const animation = (nameAnimation) => {
  return keyframes`${nameAnimation}`;
};

export const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

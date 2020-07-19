import { BASE_URL } from "./constants";
import axios from "axios";

export const SignIn = async (user) => {
  return await axios.post(`${BASE_URL}/users/sign-in`, user);
};

export const SignUp = async (user) => {
  return await axios.post(`${BASE_URL}/users/sign-up`, user);
};

export const get = async (basePath) => {
  return await axios.get(`/${basePath}`);
};

// export const search = async (basePath, name) => {
//   return await axios.get(`/${basePath}`, { params: { q: name } });
// };

export const post = async (basePath, data) => {
  return await axios.post(`/${basePath}`, data);
};

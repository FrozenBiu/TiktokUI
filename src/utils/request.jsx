import axios from "axios";

console.log(import.meta.env);

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);

  return response.data;
};

export default request;

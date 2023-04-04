import axiosInstance from "../utility/axios";

export const getPosts = () =>
  axiosInstance.get("/posts").then((res) => res.data);

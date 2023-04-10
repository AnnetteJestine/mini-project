import axiosInstance from "../utility/axios";

export const getPosts = () =>
  axiosInstance.get("/albums").then((res) => res.data);

export const getPostDetails = (id) =>
  axiosInstance.get("/albums/" + id).then((res) => res.data);

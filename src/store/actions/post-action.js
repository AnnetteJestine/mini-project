import { getPosts } from "../../services/posts-service";
import { SET_POSTS } from "../types/post-types";

export const setPostsAction = () => (dispatch) => {
  getPosts().then((res) => {
    dispatch({ type: SET_POSTS, payload: res });
  });
};

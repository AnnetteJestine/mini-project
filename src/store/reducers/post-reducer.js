import { SET_POSTS } from "../types/post-types";

const initialValues = {
  posts: [],
};

const postReducer = (state = initialValues, action) => {
  if (action.type === SET_POSTS) {
    return { posts: action.payload };
  } else {
    return state;
  }
};

export default postReducer;

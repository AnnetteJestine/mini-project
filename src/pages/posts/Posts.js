import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/Context";
import { setPostsAction } from "../../store/actions/post-action";

const Posts = () => {
  const { updateTitle } = useAppContext();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    updateTitle("Posts");
    if (!posts.length) {
      dispatch(setPostsAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Posts
      </Typography>
      {posts.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <Link to={`/posts/${item.id}`}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {item.title}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;

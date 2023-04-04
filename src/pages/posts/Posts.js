import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/posts-service";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
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
        <div key={item.id}>
          <Typography
            component="h3"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {item.title}
          </Typography>
          <Typography
            component="body1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {item.body}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Posts;

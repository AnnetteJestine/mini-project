import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div key={item.id} style={{ padding: "10px 0" }}>
          <Link to={`/post/${item.id}`}>
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

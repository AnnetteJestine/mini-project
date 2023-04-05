import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/posts-service";

const PostDetails = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  useEffect(() => {
    getPostDetails(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Post Details
      </Typography>
      {post && (
        <div>
          <Typography
            component="h3"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {post.title}
          </Typography>
          <Typography
            component="body1"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            {post.body}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default PostDetails;

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComments } from "../../services/comment-service";
import CommentIcon from "@mui/icons-material/Comment";

const Comment = () => {
  const [comment, setComments] = useState([]);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res);
    });
  }, []);
  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        <CommentIcon />
        Comments
      </Typography>
      {comment.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <Link to={`/comments/${item.id}`}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {item.name}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Comment;

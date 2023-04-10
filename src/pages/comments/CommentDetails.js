import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment'
import { getCommentDetails } from "../../services/comment-service";

const CommentDetails = () => {
  const [comment, setComment] = useState();
  const { id } = useParams();
  useEffect(() => {
    getCommentDetails(id).then((res) => {
      setComment(res);
    });
  }, [id]);

  return (
    <div>
      <Typography
        component="h4"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flexGrow: 1 }}
      >
      <CommentIcon/>
        Comment Details
      </Typography>
      {comment && (
        <div>
          <Typography
            component="h3"
            variant="h6"
            color="inherit"
           
            noWrap
            sx={{ flexGrow: 1 }}
          >
           <li>{comment.email}</li>
          </Typography>
          <Typography component="body1" color="inherit" sx={{ flexGrow: 1 }}>
          <li> {comment.name}</li>
          </Typography>
          <Typography component="body2" color="inherit" sx={{ flexGrow: 1 }}>
           <li> {comment.body}</li>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CommentDetails;

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getTodoDetails } from "../../services/Todo-service";


const ToDoDetail = () => {
  const [todo, setTodo] = useState();
  const { id } = useParams();
  useEffect(() => {
    getTodoDetails(id).then((res) => {
      setTodo(res);
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
        Todo Details
      </Typography>
      {todo && (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Typography
            component="h3"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            style={{ color: "gray", fontSize: "15px"}}
          >
            {todo.title}
          </Typography>
          <span>
          <Typography
            component="body1"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ color: todo.completed?  "green":  "red"}}
          >
            {todo.completed? "Complete": "Yet to start"}
          </Typography>
          </span>
          
        </div>
      )}
    </div>
  );
};

export default ToDoDetail;

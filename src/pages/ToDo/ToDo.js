import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../../services/Todo-service";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
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
        Todos
      </Typography>
      {todos.map((item) => (
        <div key={item.id} style={{ padding: "10px 0" }}>
          <Link to={`/todo/${item.id}`}>
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

export default ToDo;

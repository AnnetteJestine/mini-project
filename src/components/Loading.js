import { Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Typography
      component="h1"
      variant="h5"
      color="inherit"
      noWrap
      align="center"
      sx={{ flexGrow: 1 }}
    >
      Loading...
    </Typography>
  );
};

export default Loading;

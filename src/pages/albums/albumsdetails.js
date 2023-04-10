import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardCustomizeRounded from "@mui/icons-material/Albums";
import { getAlbumsDetails } from "../../services/Albums-service";

const AlbumsDetails = () => {
  const [Albums, setAlbums] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAlbumsDetails(id).then((res) => {
      setAlbums(res);
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
        <DashboardCustomizeRounded/>
        Albums Details
      </Typography>
      {Albums && (
        <div>
          <Typography
            component="h3"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <li>{Albums.email}</li>
          </Typography>
          <Typography component="body1" color="inherit" sx={{ flexGrow: 1 }}>
            <li> {Albums.id}</li>
          </Typography>
          <Typography component="body2" color="inherit" sx={{ flexGrow: 1 }}>
            <li> {Albums.title}</li>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default AlbumsDetails;

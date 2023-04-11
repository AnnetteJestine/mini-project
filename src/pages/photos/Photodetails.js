import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { getPhotoDetails } from "../../services/photos-services";
import { Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const Photodetails = () => {
  const [photo, setPhoto] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getPhotoDetails(id).then((res) => {
      setPhoto(res);
      console.log({ photo });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      {photo ? (
        <div>
          <Typography
            component="h1"
            variant="h5"
            color="grey"
            align="center"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {photo.title}
          </Typography>

          <Box
            component="img"
            sx={{
              height: 600,
              width: 600,
              maxHeight: { xs: 400, md: 350 },
              maxWidth: { xs: 300, md: 350 },
            }}
            alt={photo.title}
            src={`${photo.url}`}
          />
        </div>
      ) : (
        <div>
          <Skeleton variant="rectangular" />
          <Skeleton
            style={{
              marginTop:3,
              width: 400,
              height: 300,
            }}
            variant="rectangular"
          />
        </div>
      )}
      ;
    </div>
  );
};

export default Photodetails;

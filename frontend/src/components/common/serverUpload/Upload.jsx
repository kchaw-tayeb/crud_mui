import axios from "axios";
import React, { Fragment, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import { Fab, Input } from "@mui/material";
import { useRef } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post("/api/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 20000);
        },
      })
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data);
      })
      .catch((e) => {
        console.log("Upload Error");
      });
  };

  return (
    <>
      {/* <form
        method="post"
        action="#"
        id="#"
        onSubmit={onSubmit}
        style={{ marginLeft: "15px" }}
      >
        <div className="form-group files">
          <input
            type="file"
            onChange={onInputChange}
            className="form-control"
            multiple
          />
        </div>

        <Button onClick={onSubmit} sx={{ mt: 2 }}>
          Submit
        </Button>
      </form> */}
      <form
        method="post"
        action="#"
        id="#"
        onSubmit={onSubmit}
        style={{ marginLeft: "15px" }}
      >
        <Button variant="contained" component="label" color="primary">
          <Add /> Upload a file
          <input
            type="file"
            onChange={onInputChange}
            className="form-control"
            multiple
            hidden
          />
        </Button>
        <Button onClick={onSubmit} sx={{ ml: 3 }}>
          Send To Server
        </Button>
      </form>

      <Box sx={{ width: "100%", ml: 2, pr: 2, pb: 5, mt: 2 }}>
        <CircularProgressWithLabel value={uploadPercentage} />
        <LinearProgressWithLabel value={uploadPercentage} />
      </Box>
      {/* <SimpleReactLightbox>
        <SRLWrapper>
          {uploadedFile.map((file) => (
            <li key={file.filename}>
              <img
                style={{ maxWidth: "200px" }}
                src={file.filename}
                alt={file.originalname}
              />
            </li>
          ))}
        </SRLWrapper>
      </SimpleReactLightbox> */}
      <SimpleReactLightbox>
        <SRLWrapper>
          <ImageList sx={{ ml: 2, mr: 2 }} variant="masonry" cols={4} gap={15}>
            {uploadedFile.map((item) => (
              <ImageListItem key={item.filename}>
                <img
                  src={item.filename}
                  alt={item.originalname}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
};

export default Upload;

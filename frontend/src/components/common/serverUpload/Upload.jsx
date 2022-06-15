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
import { useEffect } from "react";
import RadioGroup from "./RadioGroup";
import Skeleton from "@mui/material/Skeleton";
import Options from "./Options";

const imageListItems = [
  { id: "masonry", title: "Masonry" },
  { id: "quilted", title: "Quilted" },
  { id: "standard", title: "Standrad" },
  { id: "woven", title: "Woven" },
];

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
  const [imageDisplay, setImageDisplay] = useState("standard");
  const handleInputChange = (e) => {
    setImageDisplay(e.target.value);
  };
  ///////////////////get all image in database///////
  const [images, setImages] = useState([]);
  const [uploadedFile, setUploadedFile] = useState("");
  const [loaded, setLoaded] = useState(false);
  const onImageLoaded = () => {
    setLoaded(true);
  };

  const [deletei, setDeleteI] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/upload");
        setImages(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [uploadedFile, deletei]);

  ////////////////////////////////////////////////////
  const [file, setFile] = useState("");

  const [uploadPercentage, setUploadPercentage] = useState(0);
  const onSubmit = () => {
    // e.preventDefault();
    console.log("file");
    console.log(file);
    const data = new FormData();
    data.append("file", file);

    ///////for multiple files/////////////
    // for (let i = 0; i < files.length; i++) {
    //   data.append("file", files[i]);
    // }

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
        setUploadedFile(response.data);
        setFile("");
      })
      .catch((e) => {
        console.log("Upload Error");
      });
  };

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
    // setTimeout(onSubmit(), 2000);
  };
  useEffect(() => {
    if (file) {
      onSubmit();
    }
  }, [file]);

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
            multiple=""
            hidden
          />
        </Button>
        {/* <Button onClick={onSubmit} sx={{ ml: 3 }}>
          Send To Server
        </Button> */}
      </form>
      <Box sx={{ width: "100%", ml: 2, pr: 2, pb: 5, mt: 2 }}>
        <CircularProgressWithLabel value={uploadPercentage} />
        <LinearProgressWithLabel value={uploadPercentage} />
      </Box>

      {/* <SimpleReactLightbox>
        <SRLWrapper>
          <ImageList sx={{ ml: 2, mr: 2 }} variant="standard" cols={4} gap={15}>
            <ImageListItem key={uploadedFile.filename}>
              <img
                src={uploadedFile.filename}
                alt={uploadedFile.originalname}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </SRLWrapper>
      </SimpleReactLightbox> */}

      <Typography
        variant="h6"
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: 1.25,
          color: "black",
          justifyContent: "flex-start",

          mt: 2,
          ml: 2,
        }}
      >
        Get All Images
      </Typography>
      <Box sx={{ ml: 2 }}>
        <RadioGroup
          value={imageDisplay}
          onChange={handleInputChange}
          items={imageListItems}
        />
      </Box>
      {images.length > 0 ? (
        <SimpleReactLightbox>
          <SRLWrapper>
            <ImageList
              sx={{ ml: 2, mr: 2, mb: 2, pb: 2 }}
              variant={imageDisplay}
              cols={4}
              gap={15}
            >
              {images.map((file) => (
                <ImageListItem key={file._id}>
                  {!loaded && (
                    <Skeleton variant="rectangular" width={210} height={300} />
                  )}
                  {loaded && (
                    <Options
                      imageId={file._id}
                      deletei={deletei}
                      setDeleteI={setDeleteI}
                    />
                  )}

                  <img
                    src={file.fileName}
                    alt={file.fileName}
                    onLoad={onImageLoaded}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </SRLWrapper>
        </SimpleReactLightbox>
      ) : (
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.25,
            color: "black",
            justifyContent: "flex-start",

            mt: 2,
            ml: 2,
            pb: 2,
          }}
        >
          there are no images in the database
        </Typography>
      )}
    </>
  );
};

export default Upload;

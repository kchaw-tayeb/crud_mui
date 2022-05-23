import React, { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgressWithLabel from "./CircularProgress";
import { Beforeunload } from "react-beforeunload";
import Popup from "../../utils/Popup";

const Input = styled("input")({
  display: "none",
});
const UploadImageList = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleShowDialog = () => {
    setIsOpen(true);
    console.log("cliked");
  };

  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    setLoading(true);
    if (counter.current >= selectedImages.length) {
      setTimeout(() => setLoading(false), 5000);
    }
  };

  return (
    <>
      {loading && (
        <Beforeunload onBeforeunload={(event) => event.preventDefault()} />
      )}

      <label htmlFor="contained-button-file">
        <Input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
          id="contained-button-file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>

      {/* images list */}
      {loading ? <CircularProgressWithLabel /> : <h1>upload images</h1>}

      <ImageList cols={4} gap={10}>
        {selectedImages.map((item) => (
          <ImageListItem key={item}>
            <img src={item} onLoad={imageLoaded} onClick={handleShowDialog} />

            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  //   aria-label={`info about ${item.title}`}
                  onClick={(e) =>
                    setSelectedImages(selectedImages.filter((e) => e !== item))
                  }
                >
                  <CloseIcon />
                </IconButton>
              }
            />
            {isOpen && (
              <Popup openPopup={isOpen} setOpenPopup={setIsOpen}>
                <>
                  <img src={item} width="500px" height="500px"></img>
                </>
              </Popup>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </>
    // </label>
  );
};

export default UploadImageList;

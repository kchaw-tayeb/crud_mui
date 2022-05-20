import React, { useState } from "react";
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

const Input = styled("input")({
  display: "none",
});
const UploadImageList = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };
  return (
    // <label htmlFor="contained-button-file">
    <>
      {/* <Input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={onSelectFile}
      />
      <Button variant="contained" component="span">
        Upload
      </Button> */}
      {/* <label>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
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
      {/* <Box>
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image}>
                <img src={image} height="200" />
                <Button
                  onClick={() =>
                    setSelectedImages(selectedImages.filter((e) => e !== image))
                  }
                >
                  delete
              </Button>
              </div>
            );
          })}
      </Box> */}
      {/* images list */}
      <ImageList sx={{ width: "100%", height: "100%" }}>
        {selectedImages.map((item) => (
          <ImageListItem key={item}>
            <img src={item} />
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
          </ImageListItem>
        ))}
      </ImageList>
    </>
    // </label>
  );
};

export default UploadImageList;
// ******************************
// const UploadImageList = () => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const onSelectFile = (event) => {
//     const selectedFiles = event.target.files;
//     const selectedFilesArray = Array.from(selectedFiles);

//     const imagesArray = selectedFilesArray.map((file) => {
//       return URL.createObjectURL(file);
//     });

//     setSelectedImages((previousImages) => previousImages.concat(imagesArray));
//   };

//   return (
//     <section>
//       <label>
//         + Add Images
//         <br />
//         <span>up to 10 images</span>
//         <input
//           type="file"
//           name="images"
//           onChange={onSelectFile}
//           multiple
//           accept="image/png , image/jpeg, image/webp"
//         />
//       </label>
//       <br />

//       {selectedImages.length > 0 &&
//         (selectedImages.length > 10 ? (
//           <p>
//             You can't upload more than 10 images! <br />
//             <span>
//               please delete <b> {selectedImages.length - 10} </b> of them{" "}
//             </span>
//           </p>
//         ) : (
//           <button
//             onClick={() => {
//               console.log("UPLOAD IMAGES");
//             }}
//           >
//             UPLOAD {selectedImages.length} IMAGE
//             {selectedImages.length === 1 ? "" : "S"}
//           </button>
//         ))}

//       <div>
//         {selectedImages &&
//           selectedImages.map((image, index) => {
//             return (
//               <div key={image}>
//                 <img src={image} height="200" alt="upload" />
//                 <button
//                   onClick={() =>
//                     setSelectedImages(selectedImages.filter((e) => e !== image))
//                   }
//                 >
//                   delete image
//                 </button>
//                 <p>{index + 1}</p>
//               </div>
//             );
//           })}
//       </div>
//     </section>
//   );
// };
// export default UploadImageList;

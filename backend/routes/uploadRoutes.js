import path from "path";
import express from "express";
import multer from "multer";
import { fileURLToPath } from "url";
import {
  deleteSingleFile,
  getallSingleFiles,
  singleFileUpload,
} from "../controllers/fileuploaderController.js";
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + file.originalname.match(/\..*$/)[0]
//     );
//   },
// });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + "-" + file.originalname);
    cb(null, Date.now() + ".jpg");
  },
});
const multi_upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .jpg .jpeg .png images are supported!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
}).single("file");
router.post("/", multi_upload, singleFileUpload);
router.get("/", getallSingleFiles);
router.delete("/:id", deleteSingleFile);
// router.post("/", (req, res) => {
//   multi_upload(req, res, function (err) {
//     console.log(req.files);
//     //multer error
//     if (err instanceof multer.MulterError) {
//       console.log(err);
//       res
//         .status(500)
//         .send({
//           error: { msg: `multer uploading error: ${err.message}` },
//         })
//         .end();
//       return;
//     } else if (err) {
//       //unknown error
//       if (err.name == "ExtensionError") {
//         res
//           .status(413)
//           .send({ error: { msg: `${err.message}` } })
//           .end();
//       } else {
//         res
//           .status(500)
//           .send({ error: { msg: `unknown uploading error: ${err.message}` } })
//           .end();
//       }
//       return;
//     }
//     res.status(200).send(req.file);
//   });
// });

export default router;
// import path from "path";
// import express from "express";
// import multer from "multer";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage }).array("file");

// router.post("/", (req, res) => {
//   // upload(req, res, (err) => {
//   //   if (err) {
//   //     return res.status(500).json(err);
//   //   }

//   //   return res.status(200).send(req.files);

//   // });
//   res.send("hello");
// });

// export default router;

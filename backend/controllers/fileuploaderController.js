import SingleFile from "../models/singlefileModel.js";
import * as fs from "fs";
export const singleFileUpload = async (req, res, next) => {
  try {
    const file = new SingleFile({
      fileName: req.file.filename,
      filePath: req.file.path,
    });
    await file.save();
    res.status(201).send(req.file);
  } catch (error) {
    res.status(400).send(error.message);
    console.log("error dans controllers");
  }
};

export const getallSingleFiles = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteSingleFile = async (req, res, next) => {
  try {
    const file = await SingleFile.findById(req.params.id);
    // fs.unlinkSync(file.fileName);
    await file.remove();

    res.json({ file: "Image removed" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

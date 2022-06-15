import mongoose from "mongoose";

const Schema = mongoose.Schema;

const singleFileSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SingleFile = mongoose.model("SingleFile", singleFileSchema);

export default SingleFile;

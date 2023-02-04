import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    Name: {
      required: true,
      type: String,
    },
    Age: {
      required: true,
      type: String,
    },
    Phone_no: {
      type: String,
    },
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
    profileURL: {
      type: String,
    },
    role: {
      type: String,
    },
    reports: [],
    medicalInfo: [],
  },
  { timestamps: true }
);
export default mongoose.model("User", dataSchema);
//module.exports = mongoose.model('User', dataSchema)

const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const FormDataSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    DateOfBirthOrAge: {
      type: Number,
      required: [true, "Please enter a Form Data"],
    },
    Sex: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    Address: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    BloodGroup: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    Mobile: {
      type: String,
      required: true,
    },
    EmergencyMobile: {
      type: Number,
      required: true,
    },
    GuardianDetails: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    select: {
      type: String,
      required: false,
    },
    adhaar: {
      type: Number,
      required: false,
    },
    PAN: {
      type: Number,
      required: false,
    },
    Marital: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    StateSelect: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    City: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    Pin: {
      type: Number,
      required: false,
    },
    Country: {
      type: String,
      required: false,
    },
    Email: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    NationalityInput: {
      type: String,
      required: false,
    },
    Occupation: {
      type: String,
      required: false,
    },
    Religion: {
      type: String,
      required: false,
    },
    SelectGovt: {
      type: String,
      required: false,
    },
  },
  { timestamps: new Date() }
);

const FormData = mongoose.model("User", FormDataSchema);
module.exports = FormData;

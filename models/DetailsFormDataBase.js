const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const FormDataSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please enter a Form Data"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: new Date()} 
);

const FormData = mongoose.model("User", FormDataSchema);
module.exports = FormData;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello Node Api");
});

mongoose
  .connect(
    "mongodb+srv://somavik99:Raavana100@myapi.fhab1ru.mongodb.net/NodeAPI?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected");
    app.listen(8080, () => {
      console.log("Node api is running on vite");
    });
  })
  .catch((error) => {
    console.log(error);
  });

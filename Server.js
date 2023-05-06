const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Form = require("./models/DetailsFormDataBase");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Node Api");
});

app.get("/blog", (req, res) => {
  res.send("Hello MyForm");
});

app.get("/Forms",async (req,res)=>{
  try {
    const forms = await Form.find({});
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.post("/Forms", async (req, res) => {
  try {
    const forms = await Form.create(req.body);
    res.status(200).json(forms);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false);
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

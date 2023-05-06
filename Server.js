const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');



const Form = require("./models/DetailsFormDataBase");

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));
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

app.get('/Forms/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const form = await Form.findById(id);
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.put('/Forms/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const forms = await Form.findByIdAndUpdate(id, req.body);
    if(!forms){
      return res.status(404).json({message: `Cannot find the details by ID ${id}`})
    }
    const UpdatedForm = await  Form.findById(id) 
    res.status(200).json(UpdatedForm);
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

app.delete("/Forms/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    const forms = await Form.findByIdAndDelete(id, req.body);
    if(!forms){
return res.status(404).json({message: `Cannot find details on ths ${id}`})
    }
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

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

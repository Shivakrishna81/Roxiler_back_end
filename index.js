const express = require('express');
const mongoose = require("mongoose")
const axios = require('axios');
const Product = require("./model/dataModel")
const bodyParser = require('body-parser');
const userRouter=require("./routers/transactionRuotes")
var cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())
app.use(bodyParser.json());
app.use("/",userRouter)

mongoose.connect("mongodb+srv://ShivaPatel:mern@shivapatel.z9rhive.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB is connected!!!")
  })

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
/*after defining type as module in package.json, we can switch from the const way of importing to the import way*/

/* const express = require('express')
const dotenv = require("dotenv") ; */

import express from "express" ;
import dotenv from "dotenv" ;
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors" ;



const app = express()
app.use(cors());      /* cors is a middleware which helps to run frontend and backend in diffrent ports */
app.use(express.json());     /* parse all the data that we send from here to json */

dotenv.config();

/* port information is sensitive therefore is kept in another file 
Also we provide a alternate port to be used if the desired port is busy*/
const PORT =process.env.PORT || 4000;
const URI = process.env.MongoDb_URI ;

/* Connect to MongoDb */
try {
    mongoose.connect(URI,{
        usenewUrlParser : true,
        useUnifiedTopology : true
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error",error);
}

/* app.get("/",(req,res) =>{
    res.send("Mern Project");
}); */

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
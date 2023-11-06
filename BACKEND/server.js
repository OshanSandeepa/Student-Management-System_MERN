const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

// Variable ekakk wdyt assign
const PORT = process.env.PORT || 8070;  // Logical OR operator should be || (two vertical bars)

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true, // Fixed the typo in useUnifiedTopology
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Success!");




});

const studentRouter=require("./routes/students.js");


app.use("/student",studentRouter);               // metn app wenne express eka  metanadi  http://localhost:8070/student ghn routes wla file eka execute wenw










app.listen(PORT, () => {
    console.log(`Server is up and running on port no: ${PORT}`); // Use backticks ` to correctly interpolate the PORT value
});

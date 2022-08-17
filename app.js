require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("./databaseConfig").connect();

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Routes
const movieRoutes = require('./routes/movie');

app.use("/api", movieRoutes);

port = 2000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
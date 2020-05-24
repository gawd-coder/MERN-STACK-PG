const express = require("express");
const mongoose = require("mongoose");
//body-parser will allow us to take request and get data from the body, eg for POST request etc.
const bodyParser = require("body-parser");
const items =  require("./routes/api/items"); 

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

//Use routes : anything that goes to api/items should refer to items variable created at the top
app.use("/api/items",items)    

//now that we are connected to mongo we need to be able to run server, creating a variable for port we would use which would later be deployed to heroku

const port = process.env.PORT || 7000;
//we want our app to listen on that port
app.listen(port, () => console.log(`Server started on port ${port}`));
const fs = require("fs");
const express = require("express");
const app = express();


const PORT = process.env.PORT || 8082;
//This is middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use

require("./htmlRoutes")(app);
require("./apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
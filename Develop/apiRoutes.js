var path = require("path");
var dbjson = require("./db/db.json");
const fs = require("fs");

// var tableData = require("assets/js/index");



module.exports = function(app) {

    // app.get("/api/waitlist", function(req, res) {
    //     res.json(waitListData);
    //   });



    app.get("/api/notes", function(req, res) {
        res.json(dbjson);
    });

    app.post("/api/notes", function(req, res) {
        dbjson.push(req.body);
        res.json(dbjson);

        // const obj = JSON.parse(dbjson);
        fs.writeFile('./db/db.json', JSON.stringify(dbjson), function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });

}
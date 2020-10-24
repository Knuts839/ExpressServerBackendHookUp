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
    app.delete("/api/notes", function(req, res) {
        // var stringifiedNote = "";
        // var notesList[];
        // var id = "";
        console.log('I AM HERE!');
        console.log(req.body);
        // Delete me dbjson.push(req.body);

        //** id = req.body;
        //** notesList = JSON.stringify(dbjson);
        //** fs.deletefile();
        // for(i = 0; i < notesList.length; i++;)
        // {
        //      if(notesList[i][2] != id)
        //      {
        // fs.appendFile('./db/db.json', notesList[i], function(err) {
        //     if (err) throw err;
        //     console.log('Deleted!');
        // });
        //      }
        // }
        // Delete me fs.writeFile('./db/db.json', JSON.stringify(dbjson), function(err) {
        //     if (err) throw err;
        //     console.log('Deleted!');
        // });
        res.json(dbjson);
    });

}
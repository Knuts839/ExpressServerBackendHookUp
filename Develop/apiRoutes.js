var path = require("path");
const dbjson = require("./db/db.json");
const fs = require("fs");

// var tableData = require("assets/js/index");



module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(dbjson);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: "",
        };

        // This code to iterates through a list of ids to get the largest id and add 1 to it.
        var nextID = 0;
        for (i = 0; i < dbjson.length; i++) {
            if (parseInt(dbjson[i].id) >= nextID) {
                nextID = parseInt(dbjson[i].id);
            }
        }
        nextID += 1;
        newNote.id = nextID.toString();

        // Add new note to our list of notes.
        dbjson.push(newNote);

        //  Return our new list to client.
        res.json(dbjson);

        // Write our new list to the server side json file. 
        fs.writeFileSync('./db/db.json', JSON.stringify(dbjson), function(err) {
            if (err)
                throw err;
        });
    });

    app.delete("/api/notes(/*)?", function(req, res) {
        var id = req.url;
        var words = id.split("/");
        var removeID = words[words.length - 1];

        // This for loop deletes/splices the undisired note. 
        for (var j = 0; j < dbjson.length; j++) {
            if (dbjson[j].id === removeID) {
                dbjson.splice(j, 1);
                break;
            }
        }

        // This rewrites the json file minus the deleted note.
        fs.writeFileSync('./db/db.json', JSON.stringify(dbjson, null, 2));

        res.json(dbjson);
    });
    // }

}
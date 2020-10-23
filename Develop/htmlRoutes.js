var path = require("path");




module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    // app.get("/styles", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../css/styles.css"));
    // });

    // If no matching route is found default to home
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
};
var path = require("path");

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/login", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/login.html"));
    });
  
    app.get("/mongo-test", function(req, res) {
      console.log(path.join(__dirname, "../views/mongo-test.html"))
      res.sendFile(path.join(__dirname, "../views/mongo-test.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/home.html"));
    });
  };
  
var bills = require("../data/bills");

module.exports = function(app) {
app.get("/api/bills", function(req, res) {
    res.json(bills);
    });
    
}
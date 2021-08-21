var express = require('express');
var app = express();
var HTTP_PORT = 8080 || process.env.PORT;
app.use(express.json());
app.get('/api/test', function (req, res) {
    res.json({
        response: "received"
    });
});
app.listen(HTTP_PORT, function () {
    console.log("listening on port " + HTTP_PORT);
});

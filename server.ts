const express = require('express')
const app = express()
const HTTP_PORT = 8080 || process.env.PORT

app.use(express.json())

app.get('/api/test', (req, res)=>{
    res.json({
        response: "received"
    })
});

app.listen(HTTP_PORT, ()=>{
    console.log("listening on port " + HTTP_PORT)
});
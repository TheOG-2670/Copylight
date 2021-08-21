const express = require('express');
const app = express();
const path = require('path')
const {Pool} = require('pg');
const bodyParser = require('body-parser');
const { resolveSoa } = require('dns');
// const bodyParser = require('body-parser')
const HTTP_PORT = 8080 || process.env.PORT;
require('dotenv').config()

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
})

app.use('/sample_clips', express.static(path.join(__dirname, 'public')))
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/test', function (req, res) {
    pool.connect((err, client, done) => {
        dbResult=(result)=>{
            return res.json({
                response: result
            })
        }
        client.query('SELECT NOW()', (err, res) => {
          done()
          if (err) {
            console.log(err.stack)
          } else {    
            dbResult(res.rows[0])
          }
        })
    })
});

//ACCOUNT MANAGEMENT ROUTES
app.post('/api/new_signup', (request, response)=>{
    console.log(request.body)
    let pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=])(?=\S+$).{8,}$/
    if(password.length > 7 && password.length < 33 && password.match(pattern))
    {
        const newUser={
            text: 'INSERT INTO Users VALUES($1, $2, $3, $4)',
            values: [request.body.firstName, request.body.lastName, request.body.email, password]
        }
        pool.connect((err, client, done) => {
            dbResult=(result)=>{
                return response.json({
                    response: result
                })
            }
            client.query(newUser, (err, res) => {
                done()
                if(err) {
                    console.log(err)
                    dbResult("error creating user")
                }
                else{
                    console.log(res)
                    dbResult("registration successful!")
                }
            })
        })
    }
    else return response.json({
        response: "invalid username and/or password!"
    })
})
//

app.listen(HTTP_PORT, function () {
    console.log("listening on port " + HTTP_PORT);
});

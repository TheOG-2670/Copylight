const express = require('express');
const app = express();
const path = require('path')
const {Pool} = require('pg');
const bodyParser = require('body-parser');
const HTTP_PORT = 8080 || process.env.PORT;
require('dotenv').config()

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
})

app.use('/static', express.static(path.join(__dirname, 'assets')))
app.use(express.json());

app.get('/api/clips', (req, res)=>{
    const clipQuery='select song.id, song.name as songname, song.sampleclipuri, song.numberofpurchases, song.price, artist.name as artistname from song inner join artist on song.artistid=artist.id;'
    pool.connect((err, client, done) => {
        dbResult=(result)=>{
            return res.json({
                response: result
            })
        }
        client.query(clipQuery, (err, res) => {
            done()
            if(err || res.rows[0] === undefined) {
                console.log(err)
                dbResult("no clips!")
            }
            else{
                console.log(res.rows[0])
                dbResult(res.rows)
            }
        })
    })
})

//ACCOUNT MANAGEMENT ROUTES
app.post('/api/signin', (req, res)=>{
    if(req.body.email!=='' && req.body.password!=='')
    {
        const existingUser={
            text: 'SELECT firstName, lastName FROM Users WHERE email=$1 AND password=$2',
            values: [req.body.email, req.body.password]
        }

        pool.connect((err, client, done) => {
            dbResult=(result)=>{
                return res.json({
                    response: result
                })
            }
            client.query(existingUser, (err, res) => {
                done()
                if(err || res.rows[0] === undefined) {
                    console.log(err)
                    dbResult("unauthorized")
                }
                else{
                    console.log(res.rows[0])
                    dbResult("authenticated")
                }
            })
        })
    }
})

app.post('/api/new_signup', (request, response)=>{
    let password=request.body.password
    let pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=])(?=\S+$).{8,}$/
    if(password.length > 7 && password.length < 33 && password.match(pattern))
    {
        const newUser={
            text: 'INSERT INTO Users(email, firstName, lastName, password) VALUES($1, $2, $3, $4)',
            values: [request.body.email, request.body.firstName, request.body.lastName, password]
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

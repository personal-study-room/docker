const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res)=> res.send('Hi Node JS'));

app.get('/health', (req, res)=>{
    if(!pool){
        var pool = mysql.createPool({
            host: "docker-mysql",
            user: "root",
            password: "1234",
            database: "nodeprac",
            port: "3306"
        });
    }

    pool.getConnection((err, connection)=>{
        if(err){
            console.log(err);
            res.send(err.message);
        } else {
            connection.release();
            res.send("db connection success");
        }
    });
});

app.listen(PORT, (req, res)=> {
    console.log('node js server is running');
});
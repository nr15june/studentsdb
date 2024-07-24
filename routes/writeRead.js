'use strict';
const express = require('express');
const wrRoute = express.Router();
const connection = require ('../db');

wrRoute.post('/api/students', function (req,res,next){
    connection.execute(`INSERT INTO students 
        (first_name,last_name,email,major,enrollment_year)
        VALUES (?,?,?,?,?)`,
        [req.body.first_name, req.body.last_name, req.body.email, 
            req.body.major,req.body.enrollment_year,]).then(() => {
                console.log('OK');
                res.status(201).send("Insert Successfully.");
            }).catch((err) => {
                console.log(err);
                res.end();
            })
});

wrRoute.get('/api/students', function (req,res,next){
    connection.execute(`SELECT * FROM students;`)
        .then(() => {
            var rawData = result[0];
            res.send(rawData);
            }).catch((err) => {
                console.log(err);
                res.end();
            })
});


wrRoute.get('/api/students/:id', function (req,res,next){
    connection.execute(`SELECT FROM students WHERE student_id=? ;`)
        .then(() => {
            var rawData = result[0];
            res.send(rawData);
            }).catch((err) => {
                console.log(err);
                res.end();
            })
});
module.exports = wrRoute;

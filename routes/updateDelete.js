'use strict';
const express = require('express');
const wrRoute = express.Router();
const connection = require ('../db');

udRoute.put('/api/students/:id ', function (req,res,next){
    connection.execute("UPDATE students SET first_name =?, last_name=?, email=?, major=?, enrollment_year=? WHERE student_id=?;",
        [ req.body.first_name, req.body.last_name, req.body.email, 
            req.body.major,req.body.enrollment_year,])
        .then(() => {
            console.log('OK');
            }).catch((err) => {
                console.log(err);
            });
            res.status(200).send("UPDATE Successfully.");
});

udRoute.delete('/api/students/:id ', function (req,res,next){
    connection.execute("DELETE FROM students WHERE student_id=?;")
        .then(() => {
            console.log('OK');
            }).catch((err) => {
                console.log(err);
            });
            res.status(200).send("UPDATE Successfully.");
});

udRoute.use('/', function (req,res,next) {
    res.sendStatus(404);
});

module.exports = udRoute;


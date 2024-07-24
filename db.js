const mysql = require('mysql2');
const dbConfiq = require('./db.config');

const connection = mysql.createPool({
    port: dbConfiq.PORT,
    host: dbConfiq.DBHOST,
    user: dbConfiq.DBUSER,
    password: dbConfiq.DBPASS,
    database: dbConfiq.DBNAME,
});

module.exports = connection.promise();
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'What1997!',
    database: 'election'
})

module.exports = db;
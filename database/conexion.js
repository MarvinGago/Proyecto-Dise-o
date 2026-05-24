const sql = require('mssql');
require('dotenv').config();

const config = {

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,

    options: {
        trustServerCertificate: true
    }
};

async function conectarDB(){

    try {

        await sql.connect(config);
        console.log('SQL Server conectado');

    } catch (error) {

        console.log(error);
    }
}

module.exports = {
    sql,
    conectarDB
};
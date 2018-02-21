"use strict";

let path = require("path");
let dotenv = require("dotenv");
dotenv.load({ path: ".env" });

module.exports = {
    "development": {
        "username": process.env.BUYSELL_DB_USERNAME,
        "password": process.env.BUYSELL_DB_PASSWORD,
        "database": process.env.BUYSELL_DB_NAME,
        "host": process.env.BUYSELL_DB_HOST,
        "dialect": "mysql",
        "operatorsAliases":false
    },
    "test": {
        "username": process.env.BUYSELL_DB_USERNAME,
        "password": process.env.BUYSELL_DB_PASSWORD,
        "database": process.env.BUYSELL_DB_NAME,
        "host": process.env.BUYSELL_DB_HOST,
        "dialect": "mysql",
        "operatorsAliases":false
    },
    "production": {
        "username": process.env.BUYSELL_DB_USERNAME,
        "password": process.env.BUYSELL_DB_PASSWORD,
        "database": process.env.BUYSELL_DB_NAME,
        "host": process.env.BUYSELL_DB_HOST,
        "dialect": "mysql",
        "operatorsAliases":false
    }
}
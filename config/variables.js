"use strict";

module.exports = {
    secret: {
        key: "BuySell"
    },
    mysql: {
        username: process.env.BUYSELL_DB_USERNAME,
        password: process.env.BUYSELL_DB_PASSWORD,
        database: process.env.BUYSELL_DB_NAME,
        options:{
            host: process.env.BUYSELL_DB_HOST,
            timezone: '+05:30',
            dialect: "mysql",
            operatorsAliases:false
        } 
    }
};
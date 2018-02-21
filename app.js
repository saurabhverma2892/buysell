"use strict";
let express = require("express");
let consign = require("consign");
let logger = require("winston");
let app = express();
let dotenv = require("dotenv");
dotenv.load({ path: ".env" });
let appPort = process.env.PORT || "8081";

consign()
    .include("./helpers")
    .then("./config")
    .then("./middlewares/basicSettings.js")
    .then("./db/connection.js")
    .then("./middlewares/staticResources.js")
    .then("./models")
    .then("./services/mailService.js")
    .then("./auth")
    .then("./services")
    .then("./controllers")
    .then("./routes")
    .then("./middlewares/mainRoutes.js")
    .then("./middlewares/errorHandler.js")
    .then("./initializeModels.js")
    .into(app);

if (process.env.NODE_ENV !== "test") {
    app.listen(appPort, () => {
        logger.info(`Server started on port ${appPort}`);
    });
}

module.exports = app;

"use strict";

module.exports = app => {
    let Sequelize = require("sequelize");
    let config = app.config.variables.mysql;
  // let userModel = app.models.user.UserModelSchema;

    var sequelize = new Sequelize(config.database, config.username, config.password, config.options);

    return sequelize;
};


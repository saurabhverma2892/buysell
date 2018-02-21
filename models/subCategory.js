let Sequelize = require("sequelize");

module.exports = app => {
    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;


    var SubCategory = sequelize.define("sub_categories", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        category_id: {
          type: Sequelize.INTEGER
        },
        name:{
          type: Sequelize.STRING
        },
        spanish_name:{
          type: Sequelize.STRING
        },
        status:{
          type: Sequelize.STRING
        },
        sub_category_slug:{
          type: Sequelize.STRING
        },
        details:{
          type: Sequelize.TEXT
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
    },{
        tableName: "sub_categories",
        timestamps: true
    });

    return {
        SubCategory
    }

}
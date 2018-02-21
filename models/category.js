let Sequelize = require("sequelize");

module.exports = app => {
    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;


    var Category = sequelize.define("categories", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
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
        category_slug:{
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
        tableName: "categories",
        timestamps: true
    });

    return {
        Category
    }

}
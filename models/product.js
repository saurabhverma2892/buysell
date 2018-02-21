let Sequelize = require("sequelize");

module.exports = app => {
    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;


    var Product = sequelize.define("products", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name:{
          type: Sequelize.STRING
        },
        description:{
          type: Sequelize.TEXT
        },
        price:{
          type: Sequelize.INTEGER
        },
        currency:{
          type: Sequelize.STRING
        },
        coordinates:{
          type: Sequelize.GEOMETRY('POINT')
        },
        country:{
          type: Sequelize.STRING
        },
        city:{
          type: Sequelize.STRING
        },
        tags:{
          type: Sequelize.TEXT
        },
        state:{
          type: Sequelize.STRING
        },
        colony:{
          type: Sequelize.STRING
        },
        zip:{
          type: Sequelize.STRING
        },
        address_line:{
          type: Sequelize.TEXT
        },
        street:{
          type: Sequelize.TEXT
        },
        phone:{
          type: Sequelize.STRING
        },
        sub_category_id:{
          type: Sequelize.INTEGER
        },
        category_id: {
          type: Sequelize.INTEGER
        },
        status:{
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
    },{
        tableName: "products",
        timestamps: true
    });

    return {
        Product
    }

}
let Sequelize = require("sequelize");

module.exports = app => {
    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;


    var Deal = sequelize.define("deals", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        owner_id: {
          type: Sequelize.INTEGER
        },
        chatter_id: {
          type: Sequelize.INTEGER
        },
        chat_id: {
          type: Sequelize.INTEGER
        },
        product_id: {
          type:Sequelize.INTEGER
        },
        category_id: {
          type:Sequelize.INTEGER
        },
        sub_category_id: {
          type:Sequelize.INTEGER
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
        tableName: "deals",
        timestamps: true
    });

    return {
        Deal
    }

}
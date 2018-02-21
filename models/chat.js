let Sequelize = require("sequelize");

module.exports = app => {
    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;


    var Chat = sequelize.define("chats", {
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
        message:{
          type: Sequelize.TEXT
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
        tableName: "chats",
        timestamps: true
    });

    return {
        Chat
    }

}
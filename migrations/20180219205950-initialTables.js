'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('users', 
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING
          },
          email: {
            type: Sequelize.STRING
          },
          fb_id: {
            type: Sequelize.TEXT
          },
          photo: {
            type: Sequelize.TEXT
          },
          friends_count:{
            type: Sequelize.INTEGER
          },
          facebook:{
            type: Sequelize.TEXT
          },
          gender:{
            type: Sequelize.STRING
          },
          country:{
            type: Sequelize.STRING
          },
          city:{
            type: Sequelize.STRING
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
          coordinates:{
            type: Sequelize.GEOMETRY('POINT')
          },
          phone:{
            type: Sequelize.STRING
          },
          status:{
            type: Sequelize.STRING
          },
          token: {
            type: Sequelize.TEXT
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          }
    },
    {
        tableName: "users",
        timestamps: true
    });

    queryInterface.createTable('products', 
        {
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
    },
    {
        tableName: "products",
        timestamps: true
    });

    queryInterface.createTable('categories', 
        {
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
    },
    {
        tableName: "categories",
        timestamps: true
    });

    queryInterface.createTable('sub_categories', 
        {
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
    },
    {
        tableName: "sub_categories",
        timestamps: true
    });

    queryInterface.createTable('chats', 
        {
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
    },
    {
        tableName: "chats",
        timestamps: true
    });

    queryInterface.createTable('deals', 
        {
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
    },
    {
        tableName: "deals",
        timestamps: true
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};

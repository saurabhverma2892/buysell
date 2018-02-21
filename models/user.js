let Sequelize = require("sequelize");

module.exports = app => {
    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;


    var User = sequelize.define("users", {
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
    },{
        tableName: "users",
        timestamps: true
    });

    function loginUser(params){
      return new Promise((resolve,reject)=>{
        User.findOrCreate({
          where: {
          email: params.email, 
          fb_id:params.facebook_id
          }, 
          defaults: {
            name:params.name,
            email:params.email,
            fb_id:params.facebook_id,
            photo:params.picture,
            friends_count:params.friends_count,
            gender:params.gender,
            token:params.token
          }
        }).spread((user, created) => {
            console.log(user);
            console.log(user.get({
              plain: true
            }))
            console.log(created)
            user.created=created;
            return resolve(user);
        })
      })
      
    }

    return {
        User
    }

}
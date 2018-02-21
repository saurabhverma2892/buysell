"use strict"

let passport = require("passport");
let LocalStrategy = require('passport-local').Strategy;
let sequelize = require('sequelize');


module.exports = app => {

    let User = app.models.user.user


    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
            done(null, user);
        });

    passport.deserializeUser(function(user, done) {
        /*User.findOne(
            {
                include:[{model:auth_user_groups, include:[{model:auth_group}]},{model:backend_profile, include:{model:backend_business}}]
                where:{
                    id:user.id
                }
            }).then(user=>{
            console.log("working in deserilize2");
            done(null, user);
        }).catch(err=>{
            done(err, null);
        }) */

        done(null, user);
    });

    

    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done) {
      process.nextTick(function() {

                User.findAll({ 
                    include: [{model:auth_user_groups, include:[{model:auth_group}]},{model:backend_profile, include:{model:backend_business}}],
                    where: {
                        'username': username,
                        '$auth_user_groups.auth_group."name"$':'dashboard'
                    }
                }).then(function(user) {
                    if(user[0].backend_profile.backend_business.name==req.params.businessId || user[0].backend_profile.backend_business.name=="admin"){
                        console.log("asdfasdfasdfasdf");
                        if(validatePassword(password, user[0].password)){
                            user[0].businessName=req.params.businessId;
                            return done(null, user[0]);
                        }
                    }
                    return done(null, false);
                });
          })
        }
    ));

    return passport;

}
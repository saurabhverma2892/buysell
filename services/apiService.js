"use strict";

module.exports = app => {

    let User = app.models.user;
    
    function loginUser(params){
        return User.loginUser(params);
    }


    return {
        loginUser
    }
}
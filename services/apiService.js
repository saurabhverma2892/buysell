"use strict";

module.exports = app => {

    let User = app.models.user;
    
    function loginUser(params){
        console.log("apiService:loginUser");
        return User.loginUser(params);
    }


    return {
        loginUser
    }
}
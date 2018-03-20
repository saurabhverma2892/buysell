"use strict";

module.exports = app => {
    let apiService = app.services.apiService;

    function loginUser(req,res,next){
        console.log("working in login user");
        console.log(req.body)
        apiService.loginUser(req.body).then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    return {
        loginUser
    }
}
"use strict";

let router = require("express").Router();

module.exports = app => {

    let apiController = app.controllers.apiController;

    router.route("/login").post((req,res,next)=>{
        apiController.loginUser(req, res, next);
    })
    
    return router;
};



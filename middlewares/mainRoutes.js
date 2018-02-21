"use strict";

module.exports = app => {
    let loginController = app.controllers.loginController;


   
    app.get("/", (req, res, next) => {
        res.render("main");
    });


    app.use("/api", app.routes.api);

   


};
const { Router } = require("express");
const { USER_CONTROLLER } = require("../controller/user.controller");
const USER_ROUTER = Router();

// user create

USER_ROUTER.post("/", USER_CONTROLLER.createUser);

// add money

USER_ROUTER.put("/wallet/add", USER_CONTROLLER.addMondyInWallet);

// get profile

USER_ROUTER.get("/", USER_CONTROLLER.getOwnProfile);

module.exports = {
  USER_ROUTER,
};

const { Router } = require("express");
const { COMMON_CONTROLLER } = require("../controller/common.controller");

const COMMON_ROUTES = Router();

// common wallet
COMMON_ROUTES.get("/wallet", COMMON_CONTROLLER.getWallet);

// transations

COMMON_ROUTES.get("/transations", COMMON_CONTROLLER.getAllTransation);

module.exports = {
  COMMON_ROUTES,
};

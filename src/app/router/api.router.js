const { Router } = require("express");
const { HOTEL_ROUTER } = require("../modules/hotel");
const { USER_ROUTER } = require("../modules/user");
const { COMMON_ROUTES } = require("../modules/common");
const { ORDER_ROUTER } = require("../modules/order");

const API_ROUTER = Router();

// Hotel

API_ROUTER.use("/hotel", HOTEL_ROUTER);

// User

API_ROUTER.use("/user", USER_ROUTER);

// Common

API_ROUTER.use("/common", COMMON_ROUTES);

// Order food

API_ROUTER.use("/order", ORDER_ROUTER);

module.exports = {
  API_ROUTER,
};

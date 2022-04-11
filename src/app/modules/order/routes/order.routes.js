const { Router } = require("express");
const { FOOD_ORDER_CONTROLLER } = require("../controller/order.controller");
const ORDER_ROUTER = Router();

// Order Food
ORDER_ROUTER.post("/", FOOD_ORDER_CONTROLLER.orderFood);

module.exports = {
  ORDER_ROUTER,
};

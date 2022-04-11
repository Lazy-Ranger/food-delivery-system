const { Router } = require("express");
const { HOTEL_CONTROLLER } = require("../controller/hote.controller");
const HOTEL_ROUTER = Router();

// register hotel
HOTEL_ROUTER.post("/", HOTEL_CONTROLLER.registerHotel);

// regiser dish

HOTEL_ROUTER.post("/dish", HOTEL_CONTROLLER.createDish);

// get own resturent

HOTEL_ROUTER.get("/resturent", HOTEL_CONTROLLER.getResturent);

// get all dish list

HOTEL_ROUTER.get("/dish", HOTEL_CONTROLLER.dishList);

module.exports = {
  HOTEL_ROUTER,
};

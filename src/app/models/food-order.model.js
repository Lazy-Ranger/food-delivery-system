const { Schema, model } = require("mongoose");
const { HOTEL_COLLECTION } = require("./hotel.models");
const { USER_COLLECTION } = require("./user.model");
const { DISH_COLLECTION } = require("./dish.model");

const FOOD_ORDER_SCHEMA_FIELD = {
  resturentId: {
    type: Schema.Types.ObjectId,
    ref: HOTEL_COLLECTION,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: USER_COLLECTION,
  },
  dishId: {
    type: Schema.Types.ObjectId,
    ref: DISH_COLLECTION,
  },
  numberOfItem: {
    type: Number,
    default: 1,
  },
};

const FOOD_ORDER_SCHEMA = new Schema(FOOD_ORDER_SCHEMA_FIELD);

const FOOD_ORDER_COLLECTION = "foodOrder";

const FOOD_ORDER_MODEL = model(FOOD_ORDER_COLLECTION, FOOD_ORDER_SCHEMA);

module.exports = { FOOD_ORDER_MODEL, FOOD_ORDER_COLLECTION };

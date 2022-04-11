const { Schema, model } = require("mongoose");
const { HOTEL_COLLECTION } = require("./hotel.models");

const DISH_SCHEMA_FIELD = {
  hotelId: {
    type: Schema.Types.ObjectId,
    ref: HOTEL_COLLECTION,
  },
  isActive: {
    type: Boolean,
  },
  dishName: {
    type: String,
    required: [true, "Dish name must be requied"],
  },
  dishPrice: {
    type: Number,
  },
};

const DISH_SCHEMA = new Schema(DISH_SCHEMA_FIELD);

const DISH_COLLECTION = "dish";

const DISH_MODEL = model(DISH_COLLECTION, DISH_SCHEMA);

module.exports = { DISH_MODEL, DISH_COLLECTION };

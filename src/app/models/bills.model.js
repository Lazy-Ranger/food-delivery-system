const { Schema, model } = require("mongoose");
const { FOOD_ORDER_COLLECTION } = require("./food-order.model");
const { HOTEL_COLLECTION } = require("./hotel.models");
const { USER_COLLECTION } = require("./user.model");

const BILLS_SCHEMA_FIELD = {
  hotelId: {
    type: Schema.Types.ObjectId,
    ref: HOTEL_COLLECTION,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: USER_COLLECTION,
  },
  orderId: {
    type: Schema.Types.ObjectId,
    ref: FOOD_ORDER_COLLECTION,
  },
  paidAmout: {
    type: Number,
    required: true,
  },
};

const BILLS_SCHEMA = new Schema(BILLS_SCHEMA_FIELD);
const BILLS_COLLECTIONS = "bills";
const BILLS_MODEL = model(BILLS_COLLECTIONS, BILLS_SCHEMA);

module.exports = {
  BILLS_MODEL,
  BILLS_COLLECTIONS,
};

const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const { WALLET_MODEL } = require("./wallets.model");

const HOTEL_SCHEMA_FIELD = {
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, "Please inter email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone number must be required"],
  },
  alternativePhone: {
    type: Number,
    required: [true, "Provide alternative phone number"],
  },
  pincode: {
    type: Number,
    required: [true, "Pin code must be required"],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Address field is empty"],
  },
  city: {
    type: String,
    required: [true, "City field is empty"],
  },
  state: {
    type: String,
    required: [true, "State field is empty"],
  },
  landMark: {
    type: String,
    required: [true, "LandMark field is empty"],
  },
  // openingTime: {
  //   type: Date,
  //   required: [true, "Opening time must be required"],
  // },
  // closeTime: {
  //   type: Date,
  //   required: [true, "Closing time must be required"],
  // },
  // isActive: {
  //   type: Boolean,
  // },
};

const HOTEL_SCHEMA = new Schema(HOTEL_SCHEMA_FIELD);
const HOTEL_COLLECTION = "hotel";

// hooks

HOTEL_SCHEMA.post("save", async function (doc) {
  await WALLET_MODEL.create({ walletCarryId: doc._id });
});

const HOTEL_MODEL = model(HOTEL_COLLECTION, HOTEL_SCHEMA);

module.exports = {
  HOTEL_MODEL,
  HOTEL_COLLECTION,
};

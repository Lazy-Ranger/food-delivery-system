const { Schema, model } = require("mongoose");
const { WALLET_MODEL } = require("./wallets.model");
const { isEmail } = require("validator");

const USER_SCHEMA_FIELD = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: [isEmail, "Please inter email"],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
};

const USER_SCHEMA = new Schema(USER_SCHEMA_FIELD);

const USER_COLLECTION = "user";

// hooks

USER_SCHEMA.post("save", async function (doc) {
  await WALLET_MODEL.create({ walletCarryId: doc._id });
});

const USER_MODEL = model(USER_COLLECTION, USER_SCHEMA);

module.exports = { USER_COLLECTION, USER_MODEL };

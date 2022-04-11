const { Schema, model } = require("mongoose");

const WALLET_SCHEMA_FIELD = {
  walletCarryId: {
    type: Schema.Types.ObjectId,
  },
  amount: {
    type: Number,
    default: 0,
  },
};

const WALLET_SCHEMA = new Schema(WALLET_SCHEMA_FIELD);
const WALLET_COLLECTION = "wallet";

const WALLET_MODEL = new model(WALLET_COLLECTION, WALLET_SCHEMA);

module.exports = {
  WALLET_COLLECTION,
  WALLET_MODEL,
};

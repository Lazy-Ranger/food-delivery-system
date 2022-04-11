const { WALLET_MODEL, BILLS_MODEL } = require("../../../models");

class CommonService {
  constructor() {
    this.walletModel = WALLET_MODEL;
    this.billModel = BILLS_MODEL;
  }
  async getWallet(walletCarryId) {
    console.log(walletCarryId);
    const wallet = await this.walletModel.findOne({ walletCarryId });
    return wallet;
  }

  async getTransation(ids) {
    const data = await this.billModel
      .find({ $or: [{ hotelId: ids }, { userId: ids }] }, { _id: 0 })
      .limit(10)
      .populate("userId")
      .populate("hotelId");
    return data;
  }
}

const COMMON_SERVICE = new CommonService();

module.exports = {
  COMMON_SERVICE,
};

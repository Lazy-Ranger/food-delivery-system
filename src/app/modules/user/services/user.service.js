const { USER_MODEL, WALLET_MODEL } = require("../../../models");
const {
  ConflictException,
  NotFoundException,
} = require("../../../../core/http");

class UserService {
  constructor() {
    this.userModel = USER_MODEL;
    this.wallet = WALLET_MODEL;
  }

  async createUser(userRegistrationData) {
    //   check if user exists
    const isUserExists = await this.userModel.findOne({
      $or: [
        { email: userRegistrationData.email },
        { phone: userRegistrationData.phone },
      ],
    });
    if (isUserExists) {
      throw new ConflictException("User already exists");
    }

    const userCreate = await this.userModel.create(userRegistrationData);
    return userCreate;
  }

  async addMondy(addMoneyReq) {
    const amount = await this.wallet.findOneAndUpdate(
      { walletCarryId: addMoneyReq.walletCarryId },
      { $inc: { amount: addMoneyReq.amount } }
    );
    return amount;
  }

  async getOwnProfile(reqQuery) {
    const profile = await this.userModel.findOne({ email: reqQuery.email });
    if (!profile) {
      throw new NotFoundException("User profile not found");
    }
    return profile;
  }
}

const USER_SERVICE = new UserService();

module.exports = {
  USER_SERVICE,
};

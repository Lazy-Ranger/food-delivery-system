const { USER_SERVICE } = require("../services");
const { httpOK, httpException } = require("../../../../core/http");

class UserController {
  constructor() {
    this.userService = USER_SERVICE;
  }
  createUser = async (req, res, next) => {
    const userRegisterReq = req.body;
    try {
      const user = await this.userService.createUser(userRegisterReq);
      httpOK(res, user);
    } catch (err) {
      httpException(res, err, `[UserController:] cannot create user`);
    }
  };

  addMondyInWallet = async (req, res) => {
    const userAddMondyReq = req.body;
    try {
      const walletData = await this.userService.addMondy(userAddMondyReq);
      httpOK(res, walletData);
    } catch (err) {
      httpException(res, err, "[UserController:] cannot add money");
    }
  };

  getOwnProfile = async (req, res) => {
    try {
      const profile = await this.userService.getOwnProfile(req.query);
      httpOK(res, profile);
    } catch (err) {
      httpException(res, err, `[UserController:] cannot get profile `);
    }
  };
}

const USER_CONTROLLER = new UserController();

module.exports = {
  USER_CONTROLLER,
};

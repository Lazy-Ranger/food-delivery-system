const { httpException, httpOK } = require("../../../../core/http");
const { COMMON_SERVICE } = require("../services");

class CommonService {
  constructor() {
    this.commonService = COMMON_SERVICE;
  }

  getWallet = async (req, res) => {
    const userId = req.query;
    try {
      const wallet = await this.commonService.getWallet(userId.id);
      httpOK(res, wallet);
    } catch (err) {
      httpException(res, err, `[CommonService:] cannot found user wallet`);
    }
  };

  // all transation

  getAllTransation = async (req, res, next) => {
    const reqData = req.query;
    try {
      const alltransations = await this.commonService.getTransation(
        reqData.ids
      );
      httpOK(res, alltransations);
    } catch (err) {
      httpException(res, err, `[AuthController]:cannot get transation history`);
    }
  };
}

const COMMON_CONTROLLER = new CommonService();

module.exports = {
  COMMON_CONTROLLER,
};

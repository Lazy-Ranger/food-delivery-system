const { HOTEL_SERVICE } = require("../services");
const { httpOK, httpException } = require("../../../../core/http");

class HotelController {
  constructor() {
    this.hotelService = HOTEL_SERVICE;
  }

  //   create hotel

  registerHotel = async (req, res, next) => {
    const createHotelReq = req.body;
    try {
      const registeredHotel = await this.hotelService.createHotel(
        createHotelReq
      );
      httpOK(res, registeredHotel);
    } catch (err) {
      httpException(res, err, `[AuthController:] cannot create hotel`);
    }
  };

  // create dish

  createDish = async (req, res, next) => {
    const createDishReq = req.body;
    try {
      const dish = await this.hotelService.createDish(createDishReq);
      httpOK(res, dish);
    } catch (err) {
      httpException(res, err, "[AuthController:] cannot create dish");
    }
  };

  // get resturent own dis list

  dishList = async (req, res, next) => {
    const createDisList = req.query;
    try {
      const dishses = await this.hotelService.disList(req.query);
      httpOK(res, dishses);
    } catch (err) {
      httpException(res, err, `[AuthController:] cannot create dish`);
    }
  };

  // get Hotels by owner

  getResturent = async (req, res, next) => {
    try {
      const resurent = await this.hotelService.getOwnResturent(req.query);
      httpOK(res, resurent);
    } catch (err) {
      httpException(res, err, `[AuthController:] cannot create dish`);
    }
  };
}

const HOTEL_CONTROLLER = new HotelController();

module.exports = { HOTEL_CONTROLLER };

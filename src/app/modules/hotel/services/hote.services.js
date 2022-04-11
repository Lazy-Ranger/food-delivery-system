const { HOTEL_MODEL, DISH_MODEL, BILLS_MODEL } = require("../../../models");
const {
  NotFoundException,
  ConflictException,
} = require("../../../../core/http");

class HotelService {
  constructor() {
    this.hotelModel = HOTEL_MODEL;
    this.dishModel = DISH_MODEL;
    this.billModel = BILLS_MODEL;
  }

  async createHotel(hotelData) {
    const isResturentAlreayFound = await this.hotelModel.findOne({
      $or: [{ email: hotelData.email }, { phone: hotelData.phone }],
    });

    if (isResturentAlreayFound) {
      throw new ConflictException("Hotel already exists");
    }

    const registerHotel = await this.hotelModel.create(hotelData);
    return registerHotel;
  }

  async createDish(dishData) {
    const registerDish = await this.dishModel.create(dishData);
    return registerDish;
  }

  async getOwnResturent(email) {
    const resturent = await this.hotelModel.findOne(email);
    if (!resturent) {
      throw new NotFoundException("Resturent is not in databse");
    }
    return resturent;
  }

  async disList(resturentId) {
    const resturent = await this.dishModel.find({});
    return resturent;
  }

  async getTransation() {
    const data = await this.billModel
      .find({}, { _id: 0 })
      .limit(10)
      .populate("orderId");
    return data;
  }
}

const HOTEL_SERVICE = new HotelService();

module.exports = { HOTEL_SERVICE };

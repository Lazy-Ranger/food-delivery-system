const {
  NotFoundException,
  ConflictException,
} = require("../../../../core/http");
const {
  FOOD_ORDER_MODEL,
  WALLET_MODEL,
  DISH_MODEL,
  BILLS_MODEL,
} = require("../../../models");

class OrderService {
  constructor() {
    this.foodOrder = FOOD_ORDER_MODEL;
    this.dishModel = DISH_MODEL;
    this.myWallet = WALLET_MODEL;
    this.bills = BILLS_MODEL;
  }

  async orderFoodServe(foodOrderBody) {
    const { userId, dishId, numberOfItem } = foodOrderBody;

    const { hotelId, dishPrice } = await this.dishModel.findOne({
      _id: dishId,
    });

    if (!hotelId) {
      throw new NotFoundException("Not available");
    }

    const { amount } = await this.myWallet.findOne({
      walletCarryId: userId,
    });

    const totalCost = dishPrice * numberOfItem;

    const isOrderPlaced = amount > totalCost ? true : false;

    if (!isOrderPlaced) {
      throw new ConflictException("Insuficient balance");
    }

    const finalAmout = amount - totalCost;

    const diductMoneyFromWalletUser = await this.myWallet.findOneAndUpdate(
      { walletCarryId: userId },
      { $set: { amount: finalAmout } }
    );

    if (!diductMoneyFromWalletUser) {
      throw new ConflictException("Order is not placed , payement issue");
    }

    const paidtoHotel = await this.myWallet.findOneAndUpdate(
      { walletCarryId: hotelId },
      { $inc: { amount: totalCost } }
    );

    console.log(paidtoHotel);

    const myOrder = {
      userId,
      dishId,
      numberOfItem,
      hotelId,
    };

    const { _id } = await this.foodOrder.create(myOrder);

    const billData = {
      hotelId,
      userId,
      orderId: _id,
      paidAmout: totalCost,
    };

    const generatingBills = await this.bills.create(billData);

    return generatingBills;
  }
}

const FOOD_ORDER_SERVICE = new OrderService();

module.exports = { FOOD_ORDER_SERVICE };

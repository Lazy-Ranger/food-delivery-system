const { httpOK, httpException } = require("../../../../core/http");
const { FOOD_ORDER_SERVICE } = require("../services");

class FoodOrderController {
  constructor() {
    this.foodOrderService = FOOD_ORDER_SERVICE;
  }

  orderFood = async (req, res) => {
    const foodOrderReq = req.body;
    try {
      const data = await this.foodOrderService.orderFoodServe(foodOrderReq);
      httpOK(res, data);
    } catch (err) {
      httpException(res, err);
    }
  };
}

const FOOD_ORDER_CONTROLLER = new FoodOrderController();

module.exports = { FOOD_ORDER_CONTROLLER };

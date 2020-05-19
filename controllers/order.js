const { errorHandler } = require("../helpers/dbHandlerError");
const { Order, CartItem } = require("../models/order");
exports.create = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({ error: errorHandler(error) });
    }
    res.json(data);
  });
};

exports.listOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name address")
    .sort("-created")
    .exec((err, orders) => {
      if (error) {
        return res.status(400).json({ error: errorHandler(error) });
      }
      res.json(orders);
    });
};

const orderService = require("../../Services/Order/order.service");

const createOrder = async (req, res) => {
  try {
    const createdOrder = await orderService.createOrder(req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrdersThrewId = async (req, res) => {
  const userId = req.params.id;
  try {
    const findOrder = await orderService.findOrderById(userId);
    return res.status(201).send(findOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const updatePaymentStatus = await orderService.updatePaymentStatus(
      req.params.id
    );
    return res.status(201).send(updatePaymentStatus);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createOrder,
  findOrdersThrewId,
  updateStatus,
};

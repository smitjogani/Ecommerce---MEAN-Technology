const addressService = require("../../Services/Address/address.service");

const addAddress = async (req, res) => {
  try {
    const address = await addressService.createAddress(req.body);
    return res.status(201).send(address);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAddById = async (req, res) => {
  const userId = req.params.id;
  try {
    const address = await addressService.getAdd(userId);
    return res.status(201).send(address);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  addAddress,
  getAddById,
};

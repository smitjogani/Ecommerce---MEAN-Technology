const Address = require("../../models/Address/address.model");

async function createAddress(reqData) {
  const data = {
    userId: reqData[0],
    firstName: reqData[1].firstName,
    lastName: reqData[1].lastName,
    streetAddress: reqData[1].streetAddress,
    city: reqData[1].city,
    state: reqData[1].state,
    pincode: reqData[1].pincode,
    mobile: reqData[1].mobile,
  };
  const result = Address.create(data);
  return result;
}

async function getAdd(userId) {
  return await Address.find({ userId });
}

module.exports = {
  createAddress,
  getAdd,
};

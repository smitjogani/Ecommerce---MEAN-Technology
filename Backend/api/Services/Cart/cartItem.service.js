const userService = require("../../Services/User/user.service");
const CartItem = require("../../models/Cart/cartItem.model");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    const user = await userService.findUserById(item.userId);

    // if (!item) {
    //   throw new Error("cart item not found : ", cartItemId);
    // }

    if (!user) {
      throw new Error("User not found : ", userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You Can't Update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function removeCartItem(userId, cartItemId) {
  const cartItem = await CartItem.findById(cartItemId);
  const user = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }

  throw new Error("YOu can not remove items");
}

async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("products");

  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("Cart Item not found with this is : ", cartItemId);
  }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById };

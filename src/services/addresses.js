const { Account, Address } = require('../models');
const {
  BadRequestError,
  NotFoundError,
  ForbiddenError,
} = require('../utils/errors');

exports.getAddress = async (id) => {
  const result = await Address.findOne({
    raw: true,
    where: { id },
  })
  if (!result) {
    throw new NotFoundError(
      `The requested URL /${id} was not found on this server.`
    );
  }
  return result;
}

exports.getAllAddress = async () => {
  const { user } = req.params;
  try {
    const result = await Address.findAll({
      raw: true,
      where: { account_id: user },
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}

exports.createAddress = async (post) => {
  //const user = req.user.id;
  const { user } = req.params;
  const newPost = {
    address: post.address,
    address_desc: post.address_desc,
    account_id: user,
  }
  try {
    const result = await Address.create(newPost,
      {
        raw: true,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

exports.updateAddress = async (id, update) => {
  //const user = req.user.id;
  const user = 1;
  const newUpdate = {
    name: update.name,
    origin: update.origin,
    price: update.price,
    amount: update.amount,
    discountRate: update.discountRate,
    discountPrice: update.price * (1 - update.discountRate / 100),
    image: update.image,
  }
  try {
    const result = await Address.update(
      newUpdate,
      {
        raw: true,
        where: { id },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

exports.deleteAddress = async (id) => {
  try {
    const result = await Address.destroy({
      where: { id },
    })
    return result;
  } catch (error) {
    console.log(error)
  }
}
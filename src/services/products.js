const { Account, Product } = require('../models');
const {
  BadRequestError,
  NotFoundError,
  ForbiddenError,
} = require('../utils/errors');

// // 0: customer, 1: admin
// const [customerRole, adminRole] = Account.getAttributes().accountType.values;

// const hasRoleToUpdateOrDelete = (customerRole, adminRole) => {
//   if ()
// }

exports.getProduct = async (id) => {
  const result = await Product.findOne({
    raw: true,
    where: { id },
  })
  if (!result) {
    console.log('실행되냐?')
    throw new NotFoundError(
      `The requested URL /${id} was not found on this server.`
    );
  }
  return result;
}

exports.getAllProduct = async () => {
  try {
    const result = await Product.findAll({
      raw: true,
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}

exports.createProduct = async (post) => {
  //const user = req.user.id;
  const user = 1;
  const newPost = {
    name: post.name,
    origin: post.origin,
    price: post.price,
    amount: post.amount,
    discountRate: post.discountRate,
    discountPrice: post.price * (1 - post.discountRate / 100),
    image: post.image,
    event: post.event,
    account_id: user,
  }
  try {
    const result = await Product.create(newPost,
      {
        raw: true,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}


exports.updateProduct = async (id, update) => {
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
    const result = await Product.update(
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

exports.deleteProduct = async (id) => {
  try {
    const result = await Product.destroy({
      where: { id },
    })
    return result;
  } catch (error) {
    console.log(error)
  }
}
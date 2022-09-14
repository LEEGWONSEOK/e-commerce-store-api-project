const productService = require('../services/products');

exports.getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await productService.getProduct(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

exports.getAllProduct = async (req, res, next) => {
  try {
    const result = await productService.getAllProduct();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

exports.createProduct = async (req, res, next) => {
  const post = req.body;
  try {
    const result = await productService.createProduct(post);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const post = req.body;
  try {
    const result = await productService.updateProduct(id, post);
    return res.status(200).send('수정');
  } catch (err) {
    return res.status(500).send(err);
  }
}

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await productService.deleteProduct(id);
    return res.status(200).send('삭제');
  } catch (err) {
    return res.status(500).send(err);
  }
}
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env];

const Customer = require('./customer');
const Admin = require('./admin');
const Address = require('./address');
const Product = require('./product');
const Cart = require('./cart');
const Payment = require('./payment');

const db = {};
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = Customer;
db.Admin = Admin;
db.Address = Address;
db.Product = Product;
db.Cart = Cart;
db.Payment = Payment;

Customer.init(sequelize);
Admin.init(sequelize);
Address.init(sequelize);
Product.init(sequelize);
Cart.init(sequelize);
Payment.init(sequelize);

Customer.associate(db);
Admin.associate(db);
Address.associate(db);
Product.associate(db);
Cart.associate(db);
Payment.associate(db);

module.exports = db;
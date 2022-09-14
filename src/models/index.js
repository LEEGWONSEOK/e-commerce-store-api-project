const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env];

const Account = require('./account');
const Address = require('./address');
const Product = require('./product');
const Cart = require('./cart');
const Payment = require('./payment');
//const Event = require('./event');

const db = {};
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Account = Account;
db.Address = Address;
db.Product = Product;
db.Cart = Cart;
db.Payment = Payment;
//db.Event = Event;

Account.init(sequelize);
Address.init(sequelize);
Product.init(sequelize);
Cart.init(sequelize);
Payment.init(sequelize);
//Event.init(sequelize);

Account.associate(db);
Address.associate(db);
Product.associate(db);
Cart.associate(db);
Payment.associate(db);
//Event.associate(db);

module.exports = db;
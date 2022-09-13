// Product TB
const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '상품 이름',
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '상품 원산지',
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '상품 가격',
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '상품 개수',
      },
      discountRate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '상품 할인율',
      },
      discountPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '상품 할인 가격',
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '상품 이미지',
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        comment: '생성 날짜',
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'Product',
      tableName: 'products',
      paranoid: false,
      charset: 'utf8',
      collate: "utf8_general_ci"
    });
  }

  static associate(db) {
    // Account : Product = 1 : N
    db.Product.belongsTo(db.Account, {
      foreignKey: 'account_id'
    });

    // Product : Cart = 1 : N
    db.Product.hasMany(db.Cart, {
      foreignKey: 'product_id'
    });

    // Event : Product = 1 : N
    db.Product.belongsTo(db.Event, {
      foreignKey: 'event_id'
    });
  }
}
// Cart TB
const Sequelize = require('sequelize');

module.exports = class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '단일 상품 개수',
      },
      isPayment: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '결제 여부',
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
      modelName: 'Cart',
      tableName: 'carts',
      paranoid: false,
      charset: 'utf8',
      collate: "utf8_general_ci"
    });
  }

  static associate(db) {
    // Account : Cart = 1 : N
    db.Cart.belongsTo(db.Account, {
      foreignKey: 'account_id'
    });
    
    // Product : Cart = 1 : N
    db.Cart.belongsTo(db.Product, {
      foreignKey: 'product_id'
    });
  }
}
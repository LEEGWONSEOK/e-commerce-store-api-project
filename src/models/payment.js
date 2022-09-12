// Payment TB
const Sequelize = require('sequelize');

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      cartList: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: '장바구니 리스트',
      },
      totalPrice: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '총 결제 가격',
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
      modelName: 'Payment',
      tableName: 'payments',
      paranoid: false,
      charset: 'utf8',
      collate: "utf8_general_ci"
    });
  }

  static associate(db) {
    // // User : Applyment = 1 : N
    // db.Applyment.belongsTo(db.User, {
    //   foreignKey: 'userId'
    // });
    
    // // Recruit : Applyment = 1 : N
    // db.Applyment.belongsTo(db.Recruit, {
    //   foreignKey: 'recruitId'
    // });
  }
}
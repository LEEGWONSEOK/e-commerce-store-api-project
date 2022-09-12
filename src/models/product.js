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
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '상품 가격',
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
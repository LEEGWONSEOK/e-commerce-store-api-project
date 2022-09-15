// Customer TB
const Sequelize = require('sequelize');

module.exports = class Customer extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: '계정 이메일',
      },
      nick: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true,
        comment: '닉네임',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '비밀번호',
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'customer',
        comment: '암호 알고리즘',
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
      modelName: 'Customer',
      tableName: 'customers',
      paranoid: false,
      charset: 'utf8',
      collate: "utf8_general_ci"
    });
  }

  static associate(db) {
    // Customer : Address = 1 : N
    db.Customer.hasMany(db.Address, {
      foreignKey: 'customer_id'
    });
    
    // Customer : Cart = 1 : N
    db.Customer.hasMany(db.Cart, {
      foreignKey: 'customer_id'
    });
  }
}
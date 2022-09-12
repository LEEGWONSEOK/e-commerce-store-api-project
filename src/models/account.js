// Account TB
const Sequelize = require('sequelize');

module.exports = class Account extends Sequelize.Model {
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
      accountType: {
        type: Sequelize.ENUM('customer', 'seller', 'admin'),
        allowNull: false,
        comment: '계정 타입',
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
      modelName: 'Account',
      tableName: 'accounts',
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
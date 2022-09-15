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
        type: Sequelize.ENUM('user', 'admin'),
        allowNull: false,
        comment: '계정 타입(고객, 관리자)',
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
    // Account : Address = 1 : N
    db.Account.hasMany(db.Address, {
      foreignKey: 'account_id'
    });

    // Account : Product = 1 : N
    db.Account.hasMany(db.Product, {
      foreignKey: 'account_id'
    });

    // Account : Cart = 1 : N
    db.Account.hasMany(db.Cart, {
      foreignKey: 'account_id'
    });

    
    // // Account TB : Address TB = 1 : N
    // db.Applyment.belongsTo(db.User, {
    //   foreignKey: 'userId'
    // });
    
    // // Recruit : Applyment = 1 : N
    // db.Applyment.belongsTo(db.Recruit, {
    //   foreignKey: 'recruitId'
    // });
  }
}
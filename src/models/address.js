// Address TB
const Sequelize = require('sequelize');

module.exports = class Address extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '주소',
      },
      addressDesc: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '주소 설명',
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
      modelName: 'Address',
      tableName: 'addresses',
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
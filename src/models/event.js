// // Event TB
// const Sequelize = require('sequelize');

// module.exports = class Event extends Sequelize.Model {
//   static init(sequelize) {
//     return super.init({
//       event: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         comment: '이벤트 종류',
//       },
//       createAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.fn('now'),
//         comment: '생성 날짜',
//       },
//     }, {
//       sequelize,
//       timestamps: false,
//       underscored: true,
//       modelName: 'Event',
//       tableName: 'events',
//       paranoid: false,
//       charset: 'utf8',
//       collate: "utf8_general_ci"
//     });
//   }

//   static associate(db) {
//     // Event : Product = 1 : N
//     db.Event.hasMany(db.Product, {
//       foreignKey: 'event_id'
//     });
//   }
// }
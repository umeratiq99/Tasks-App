// Table Schema in DB
const sq = require("../config/dbconfig");
const { DataTypes } = require("sequelize");
const Users = require("./users");
//Creating Table in DB
const Tasks = sq.define("tasks", {
  //first arguement users is the table name in DB
  id: {
    // id here is the name of column
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: [
        'complete',
        'pending',
    ],
    defaultValue: 'pending'
}
});

Users.hasMany(Tasks,{foreignKey : 'userid'});
Tasks.belongsTo(Users,{foreignKey : 'userid'});

module.exports = Tasks;
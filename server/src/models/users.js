// Table Schema in DB
const sq = require("../src/config/dbconfig");
const { DataTypes } = require("sequelize");

//Creating Table in DB
const Users = sq.define("users", {
  //first arguement users is the table name in DB
  id: {
    // id here is the name of column
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate : {
        isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;

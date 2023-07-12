'use strict';
const { DataTypes } = require("sequelize");
//** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
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
    },
      userid: {
        type: DataTypes.INTEGER,
        allowNull : false,
        refrence: {
          model : "users",
          key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("tasks");
  }
};

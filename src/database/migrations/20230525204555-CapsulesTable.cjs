'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('capsules', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      reuse_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      water_landings: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      land_landings: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      last_update: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serial: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('capsules');
  }
};

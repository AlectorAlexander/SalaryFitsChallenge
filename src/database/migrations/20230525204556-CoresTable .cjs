'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cores', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      block: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      reuse_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rtls_attempts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rtls_landings: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      asds_attempts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      asds_landings: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      last_update: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      launches: {
        type: Sequelize.JSON,
        allowNull: true,
    },
      serial: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
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
    await queryInterface.dropTable('cores');
  }
};

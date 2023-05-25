'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('launchs', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      links: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      reddit: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      flickr: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      tdb: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      net: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      window: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rocket: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      success: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      failures: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      details: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      crew: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      cores: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      ships: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      capsules: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      payloads: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      launchpad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      upcoming: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      auto_update: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'auto-update',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_utc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_unix: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date_local: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_precision: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_tbd: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      date_tbd_precision: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_tbd_window: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('launchs');
  }
};

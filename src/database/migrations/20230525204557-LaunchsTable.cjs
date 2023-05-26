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
        allowNull: true,
        defaultValue: {},
      },
      reddit: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: {},
      },
      flickr: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: {},
      },
      tdb: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      net: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      window: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rocket: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      success: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      failures: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      details: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '',
      },
      crew: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      cores: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      ships: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      capsules: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      payloads: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      launchpad: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      upcoming: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      autoUpdate: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        field: 'auto_update',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      date_utc: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      date_unix: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      date_local: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      date_precision: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      date_tbd: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      date_tbd_window: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('launchs');
  }
};

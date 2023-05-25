'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rockets', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      height: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      diameter: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      mass: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      first_stage: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      second_stage: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      engines: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      landing_legs: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      payload_weights: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      flickr_images: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      stages: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boosters: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cost_per_launch: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      success_rate_pct: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      first_flight: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false
      },
      wikipedia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rockets');
  }
};

'use strict'

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
        allowNull: true
      },
      diameter: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      mass: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      first_stage: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      second_stage: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      engines: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      landing_legs: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      payload_weights: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      flickr_images: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      stages: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      boosters: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cost_per_launch: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      success_rate_pct: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      first_flight: {
        type: Sequelize.STRING,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true
      },
      wikipedia: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rockets')
  }
}

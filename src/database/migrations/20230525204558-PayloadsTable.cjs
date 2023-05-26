'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payloads', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      dragon: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reused: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      launch: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customers: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]',
        get() {
          const value = this.getDataValue('customers');
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue('customers', JSON.stringify(value));
        },
      },
      norad_ids: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]',
        get() {
          const value = this.getDataValue('norad_ids');
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue('norad_ids', JSON.stringify(value));
        },
      },
      nationalities: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]',
        get() {
          const value = this.getDataValue('nationalities');
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue('nationalities', JSON.stringify(value));
        },
      },
      manufacturers: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]',
        get() {
          const value = this.getDataValue('manufacturers');
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue('manufacturers', JSON.stringify(value));
        },
      },
      mass_kg: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      mass_lbs: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      orbit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reference_system: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      regime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      semi_major_axis_km: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      eccentricity: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      periapsis_km: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      apoapsis_km: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      inclination_deg: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      period_min: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      lifespan_years: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      epoch: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mean_motion: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      raan: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      arg_of_pericenter: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      mean_anomaly: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payloads');
  },
};

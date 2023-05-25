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
        type: Sequelize.TEXT,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reused: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      launch: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customers: {
        type: Sequelize.TEXT,
        allowNull: false,
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
        allowNull: false,
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
        allowNull: false,
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
        allowNull: false,
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
        allowNull: false,
      },
      mass_lbs: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      orbit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reference_system: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      regime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      semi_major_axis_km: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      eccentricity: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      periapsis_km: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      apoapsis_km: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      inclination_deg: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      period_min: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      lifespan_years: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      epoch: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mean_motion: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      raan: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      arg_of_pericenter: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      mean_anomaly: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payloads');
  },
};

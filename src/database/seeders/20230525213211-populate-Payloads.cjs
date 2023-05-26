'use strict';

const axios = require('axios');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/payloads');
      const payloads = response.data;

      const payloadData = payloads.map(payload => ({
        id: payload.id,
        dragon: JSON.stringify(payload.dragon),
        name: payload.name,
        type: payload.type,
        reused: payload.reused,
        launch: payload.launch,
        customers: JSON.stringify(payload.customers),
        norad_ids: JSON.stringify(payload.norad_ids),
        nationalities: JSON.stringify(payload.nationalities),
        manufacturers: JSON.stringify(payload.manufacturers),
        mass_kg: payload.mass_kg,
        mass_lbs: payload.mass_lbs,
        orbit: payload.orbit,
        reference_system: payload.reference_system,
        regime: payload.regime,
        longitude: payload.longitude,
        semi_major_axis_km: payload.semi_major_axis_km,
        eccentricity: payload.eccentricity,
        periapsis_km: payload.periapsis_km,
        apoapsis_km: payload.apoapsis_km,
        inclination_deg: payload.inclination_deg,
        period_min: payload.period_min,
        lifespan_years: payload.lifespan_years,
        epoch: payload.epoch,
        mean_motion: payload.mean_motion,
        raan: payload.raan,
        arg_of_pericenter: payload.arg_of_pericenter,
        mean_anomaly: payload.mean_anomaly,
      }));

      return queryInterface.bulkInsert('payloads', payloadData);
    } catch (error) {
      console.error('Erro ao obter dados dos payloads:', error);
    }
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payloads', null, {});
  }
};

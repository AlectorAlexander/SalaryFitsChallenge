'use strict';

const axios = require('axios');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return axios.get('https://api.spacexdata.com/v4/launchpads')
      .then(response => {
        const launchpads = response.data;

        const launchpadData = launchpads.map(launchpad => ({
          id: launchpad.id,
          name: launchpad.name,
          full_name: launchpad.full_name,
          status: launchpad.status,
          locality: launchpad.locality,
          region: launchpad.region,
          timezone: launchpad.timezone,
          latitude: launchpad.latitude,
          longitude: launchpad.longitude,
          rockets: JSON.stringify(launchpad.rockets),
          details: launchpad.details, 
          createdAt: new Date(),
          updatedAt: new Date()
        }));
        

        return queryInterface.bulkInsert('launchpads', launchpadData);
      })
      .catch(error => {
        console.error('Erro ao obter dados dos launchpads:', error);
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('launchpads', null, {});
  }
};

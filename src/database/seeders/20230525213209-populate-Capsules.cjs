'use strict';

const axios = require('axios');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return axios.get('https://api.spacexdata.com/v4/capsules')
      .then(response => {
        const capsules = response.data;

        const capsuleData = capsules.map(capsule => {
          const lastUpdate = capsule.last_update && capsule.last_update.replace(/"/g, '');
          const launches = capsule.launches && JSON.stringify(capsule.launches);

          return {
            reuse_count: capsule.reuse_count,
            water_landings: capsule.water_landings,
            land_landings: capsule.land_landings,
            last_update: lastUpdate,
            launches: launches,
            serial: capsule.serial,
            status: capsule.status,
            type: capsule.type,
            id: capsule.id,
            createdAt: new Date(),
            updatedAt: new Date()
          };
        });

        return queryInterface.bulkInsert('capsules', capsuleData);
      })
      .catch(error => {
        console.error('Erro ao obter dados das cápsulas:', error);
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('capsules', null, {});
  }
};

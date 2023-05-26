'use strict';

const axios = require('axios');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return axios.get('https://api.spacexdata.com/v4/cores')
      .then(response => {
        const cores = response.data;

        const coreData = cores.map(core => ({
          block: core.block,
          reuse_count: core.reuse_count,
          rtls_attempts: core.rtls_attempts,
          rtls_landings: core.rtls_landings,
          asds_attempts: core.asds_attempts,
          asds_landings: core.asds_landings,
          last_update: core.last_update,
          launches: core.launches.length > 0 ? JSON.stringify(core.launches) : null,
          serial: core.serial,
          status: core.status,
          id: core.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }));
        
        return queryInterface.bulkInsert('cores', coreData);
        
      })
      .catch(error => {
        console.error('Erro ao obter dados dos cores:', error);
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cores', null, {});
  }
};

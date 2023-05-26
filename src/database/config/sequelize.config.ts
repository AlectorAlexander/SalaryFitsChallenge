require('dotenv/config');
const { Options } = require('sequelize');

const dialect = 'mysql';

const config = {
  development: {
    createDatabase: true,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3002,
    database: 'SPACE_X',
    dialect,
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  },
  test: {
    createDatabase: true,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: 'SPACE_X_test',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3002,
    dialect,
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  },
  production: {
    createDatabase: true,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: 'SPACE_X_test',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3002,
    dialect,
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  },
};

module.exports = config;

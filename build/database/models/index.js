"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sequelize_1 = require("sequelize");
const config = require("../config/sequelize.config");
const sequelize = new sequelize_1.Sequelize(config[process.env.NODE_ENV || 'development']);
exports.default = sequelize;
//# sourceMappingURL=index.js.map
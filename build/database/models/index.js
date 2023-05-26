"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_config_1 = require("../config/sequelize.config");
exports.default = new sequelize_1.Sequelize(sequelize_config_1.default);
//# sourceMappingURL=index.js.map
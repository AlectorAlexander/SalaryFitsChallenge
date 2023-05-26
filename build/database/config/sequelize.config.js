"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "123456",
    database: "Space_X_BD",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3002,
    dialect: "mysql",
    dialectOptions: {
        timezone: "Z",
    },
    logging: false,
};
exports.default = config;
//# sourceMappingURL=sequelize.config.js.map
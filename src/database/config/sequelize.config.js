require("dotenv").config();
const config = {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS,
    createDatabase: true,
    database: "SPACE_X",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 3002,
    dialect: "mysql",
    dialectOptions: {
        timezone: "Z",
    },
    logging: false,
};

module.exports = config; 
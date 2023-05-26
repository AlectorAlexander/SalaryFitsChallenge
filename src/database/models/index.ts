import "dotenv/config";
import { Sequelize } from "sequelize";
const config = require("../config/sequelize.config");

const sequelize = new Sequelize(config[process.env.NODE_ENV || 'development']);

export default sequelize;

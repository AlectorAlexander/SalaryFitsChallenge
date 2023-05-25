import { Sequelize } from "sequelize";
import config from "../config/sequelize.config";

export default new Sequelize(config);

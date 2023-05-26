"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Cores extends sequelize_1.Model {
    static associate(models) {
        // Relação N para N com Launch
        Cores.belongsToMany(models.Launch, {
            through: "LaunchCore",
            foreignKey: "coreId",
            otherKey: "launchId",
            as: "launches",
        });
    }
}
Cores.init({
    block: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    reuse_count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    rtls_attempts: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    rtls_landings: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    asds_attempts: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    asds_landings: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    last_update: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    launches: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    serial: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: "Cores",
    tableName: "cores",
});
exports.default = Cores;
//# sourceMappingURL=CoresModels.js.map
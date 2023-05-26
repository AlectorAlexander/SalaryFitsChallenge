"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Launchpads extends sequelize_1.Model {
    static associate(models) {
        // Relação 1 para N com Rocket
        Launchpads.hasMany(models.Rocket, {
            foreignKey: "launchPadId",
            as: "rockets",
        });
        // Relação 1 para N com Launch
        Launchpads.hasMany(models.Launch, {
            foreignKey: "launchPadId",
            as: "launches",
        });
    }
}
Launchpads.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    full_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    locality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    region: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    timezone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    launch_attempts: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    launch_successes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    rockets: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    launches: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    details: {
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
    modelName: "Launchpads",
    tableName: "launchpads",
});
exports.default = Launchpads;
//# sourceMappingURL=LaunchpadsModels.js.map
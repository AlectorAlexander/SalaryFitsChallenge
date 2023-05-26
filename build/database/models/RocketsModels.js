"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Rocket extends sequelize_1.Model {
    static associate(models) {
        // Relação 1 para 1 com Launch
        Rocket.hasOne(models.Launch, {
            foreignKey: "rocketId",
            as: "rocket",
        });
    }
}
Rocket.init({
    height: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    diameter: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    mass: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    first_stage: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    second_stage: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    engines: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    landing_legs: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    payload_weights: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    flickr_images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    stages: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    boosters: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cost_per_launch: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    success_rate_pct: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    first_flight: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    wikipedia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: "Rocket",
    tableName: "rockets",
    timestamps: false,
    underscored: true,
    freezeTableName: true,
});
exports.default = Rocket;
//# sourceMappingURL=RocketsModels.js.map
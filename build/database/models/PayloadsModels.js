"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Payload extends sequelize_1.Model {
    static associate(models) {
        // Relação 1 para 1 com Launch
        Payload.hasOne(models.Launch, {
            foreignKey: "payloadId",
            as: "payload",
        });
    }
}
Payload.init({
    dragon: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    reused: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    launch: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customers: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    norad_ids: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.INTEGER),
        allowNull: false,
    },
    nationalities: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    manufacturers: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    mass_kg: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    mass_lbs: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    orbit: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    reference_system: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    regime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    semi_major_axis_km: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    eccentricity: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    periapsis_km: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    apoapsis_km: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    inclination_deg: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    period_min: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    lifespan_years: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    epoch: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mean_motion: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    raan: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    arg_of_pericenter: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    mean_anomaly: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: "Payload",
    tableName: "payloads",
});
exports.default = Payload;
//# sourceMappingURL=PayloadsModels.js.map
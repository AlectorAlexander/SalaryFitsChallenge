"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Capsule extends sequelize_1.Model {
    static associate(models) {
        // Relação 1 para 1 com Launch
        Capsule.hasOne(models.Launch, {
            foreignKey: "capsuleId",
            as: "capsule",
        });
    }
}
Capsule.init({
    reuse_count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    water_landings: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    land_landings: {
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
    type: {
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
    modelName: "Capsule",
    tableName: "capsules",
});
exports.default = Capsule;
//# sourceMappingURL=CapsulesModels.js.map
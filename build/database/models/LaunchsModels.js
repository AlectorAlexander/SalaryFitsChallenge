"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Launch extends sequelize_1.Model {
    static associate(models) {
        // Relação 1 para 1 com Rocket
        Launch.belongsTo(models.Rocket, {
            foreignKey: 'rocketId',
            as: 'rocket',
        });
        // Relação muitos para muitos com Capsule
        Launch.belongsToMany(models.Capsule, {
            through: 'LaunchCapsules',
            foreignKey: 'launchId',
            otherKey: 'capsuleId',
            as: 'capsules',
        });
        // Relação muitos para 1 com Payload
        Launch.hasMany(models.Payload, {
            foreignKey: 'launchId',
            as: 'payloads',
        });
        // Relação 1 para muitos com LaunchPad
        Launch.belongsTo(models.LaunchPad, {
            foreignKey: 'launchPadId',
            as: 'launchPad',
        });
        // Relação muitos para muitos com Core
        Launch.belongsToMany(models.Core, {
            through: 'LaunchCores',
            foreignKey: 'launchId',
            otherKey: 'coreId',
            as: 'cores',
        });
    }
}
Launch.init({
    links: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    reddit: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    flickr: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    tdb: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'tdb',
    },
    net: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'net',
    },
    window: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'window',
        validate: {
            min: 0,
            max: 24,
            isInt: true,
            notNull: true,
            notEmpty: true,
            isNumeric: true,
            isDecimal: true,
            isFloat: true,
        }
    },
    rocket: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    success: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    failures: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        field: 'failures',
    },
    details: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'details',
    },
    crew: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    cores: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        field: 'cores',
    },
    ships: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        field: 'ships',
    },
    capsules: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        field: 'capsules',
    },
    payloads: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        field: 'payloads',
    },
    launchpad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'launchpad',
    },
    upcoming: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'upcoming',
    },
    autoUpdate: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'auto-update',
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'name',
    },
    dateUtc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'date_utc',
    },
    dateUnix: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'date_unix',
    },
    dateLocal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'date_local',
    },
    datePrecision: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'date_precision',
    },
    dateTbd: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'date_tbd',
    },
    dateTbdPrecision: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'date_tbd_precision',
    },
    dateTbdWindow: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'date_tbd_window',
    },
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'Launch',
    tableName: 'launchs',
    freezeTableName: true,
    underscored: true,
    paranoid: true,
    charset: 'utf8',
    timestamps: false, // Defina como false se não quiser adicionar colunas de timestamps
});
exports.default = Launch;
//# sourceMappingURL=LaunchsModels.js.map
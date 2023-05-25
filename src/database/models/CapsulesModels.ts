import { Model, DataTypes } from "sequelize";
import db from ".";

class Capsule extends Model {
    public reuse_count!: number; /* Número de vezes que a cápsula foi reutilizada. */
    public water_landings!: number; /* Número de pousos na água da cápsula. */
    public land_landings!: number; /* Número de pousos em terra da cápsula. */
    public last_update!: string; /* Última atualização sobre a cápsula. */
    public launches!: string[]; /* IDs dos lançamentos associados à cápsula. */
    public serial!: string; /* Número de série da cápsula. */
    public status!: string; /* Status da cápsula. */
    public type!: string; /* Tipo de cápsula. */
    public id!: string; /* ID da cápsula. */

    static associate(models: any) {
    // Relação 1 para 1 com Launch
        Capsule.hasOne(models.Launch, {
            foreignKey: "capsuleId",
            as: "capsule",
        });
    }
}

Capsule.init(
    {
        reuse_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        water_landings: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        land_landings: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        last_update: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        launches: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        serial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Capsule",
        tableName: "capsules",
    }
);

export default Capsule;

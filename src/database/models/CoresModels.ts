import { Model, DataTypes } from "sequelize";
import db from ".";

class Cores extends Model {
    public block!: number; /* Número do bloco. */
    public reuse_count!: number; /* Contagem de reutilização. */
    public rtls_attempts!: number; /* Número de tentativas de retorno para o lançamento no local de decolagem. */
    public rtls_landings!: number; /* Número de pousos bem-sucedidos no local de decolagem. */
    public asds_attempts!: number; /* Número de tentativas de retorno para uma plataforma de pouso no mar. */
    public asds_landings!: number; /* Número de pousos bem-sucedidos em uma plataforma de pouso no mar. */
    public last_update!: string; /* Última atualização. */
    public launches!: string[]; /* IDs dos lançamentos associados à cor. */
    public serial!: string; /* Número de série da cor. */
    public status!: string; /* Status da cor. */
    public id!: string; /* ID da cor. */

    static associate(models: any) {
    // Relação N para N com Launch
        Cores.belongsToMany(models.Launch, {
            through: "LaunchCore",
            foreignKey: "coreId",
            otherKey: "launchId",
            as: "launches",
        });
    }
}

Cores.init(
    {
        block: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reuse_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rtls_attempts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rtls_landings: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        asds_attempts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        asds_landings: {
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
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Cores",
        tableName: "cores",
    }
);

export default Cores;

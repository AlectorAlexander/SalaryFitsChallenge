import { Model, DataTypes } from "sequelize";
import db from ".";

class Launchpads extends Model {
    public name!: string; /* Nome da plataforma de lançamento. */
    public full_name!: string; /* Nome completo da plataforma de lançamento. */
    public locality!: string; /* Localidade da plataforma de lançamento. */
    public region!: string; /* Região da plataforma de lançamento. */
    public timezone!: string; /* Fuso horário da plataforma de lançamento. */
    public latitude!: number; /* Latitude da plataforma de lançamento. */
    public longitude!: number; /* Longitude da plataforma de lançamento. */
    public launch_attempts!: number; /* Número de tentativas de lançamento. */
    public launch_successes!: number; /* Número de lançamentos bem-sucedidos. */
    public rockets!: string[]; /* IDs dos foguetes associados à plataforma de lançamento. */
    public launches!: string[]; /* IDs dos lançamentos associados à plataforma de lançamento. */
    public status!: string; /* Status da plataforma de lançamento. */
    public id!: string; /* ID da plataforma de lançamento. */

    static associate(models: any) {
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

Launchpads.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        locality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timezone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        launch_attempts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        launch_successes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rockets: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        launches: {
            type: DataTypes.ARRAY(DataTypes.STRING),
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
        modelName: "Launchpads",
        tableName: "launchpads",
    }
);

export default Launchpads;

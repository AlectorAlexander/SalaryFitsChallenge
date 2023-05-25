import { Model, DataTypes } from "sequelize";
import db from ".";

class Rocket extends Model {
    public height!: object; /* Contém informações sobre a altura da espaçonave, em metros e pés. */
    public diameter!: object; /* Contém informações sobre o diâmetro da espaçonave, em metros e pés. */
    public mass!: object; /* Contém informações sobre a massa da espaçonave, em quilogramas e libras. */
    public first_stage!: object; /* Contém informações sobre o primeiro estágio da espaçonave, como empuxo, número de motores, quantidade de combustível, etc. */
    public second_stage!: object; /* Contém informações sobre o segundo estágio da espaçonave, como empuxo, número de motores, quantidade de combustível, etc. */
    public engines!: object; /* Contém informações sobre os motores da espaçonave, como empuxo, tipo de combustível, etc. */
    public landing_legs!: object; /* Contém informações sobre as pernas de pouso da espaçonave, como o número de pernas e o material usado. */
    public payload_weights!: object[]; /* Contém informações sobre os pesos da carga útil suportados pela espaçonave. */
    public flickr_images!: string[]; /* URLs das imagens da espaçonave disponíveis no Flickr. */
    public name!: string; /* Nome da espaçonave. */
    public type!: string; /* Tipo de espaçonave. */
    public active!: boolean; /* Indica se a espaçonave está ativa. */
    public stages!: number; /* Número de estágios da espaçonave. */
    public boosters!: number; /* Número de propulsores da espaçonave. */
    public cost_per_launch!: number; /* Custo por lançamento da espaçonave. */
    public success_rate_pct!: number; /* Taxa de sucesso dos lançamentos da espaçonave em porcentagem. */
    public first_flight!: string; /* Data do primeiro voo da espaçonave. */
    public country!: string; /* País de origem da espaçonave. */
    public company!: string; /* Empresa responsável pela espaçonave. */
    public wikipedia!: string; /* URL da página da espaçonave na Wikipedia. */
    public description!: string; /* Descrição da espaçonave. */
    public id!: string; /* ID da espaçonave. */

    static associate(models: any) {
    // Relação 1 para 1 com Launch
        Rocket.hasOne(models.Launch, {
            foreignKey: "rocketId",
            as: "rocket",
        });
    }
}

Rocket.init(
    {
        height: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        diameter: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        mass: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        first_stage: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        second_stage: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        engines: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        landing_legs: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        payload_weights: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        flickr_images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        stages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        boosters: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cost_per_launch: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        success_rate_pct: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        first_flight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wikipedia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
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
        modelName: "Rocket",
        tableName: "rockets",
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    }
);

export default Rocket;

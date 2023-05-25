import { Model, DataTypes } from "sequelize";
import db from ".";

class Payload extends Model {
    public dragon!: {
    capsule: null | string;
    mass_returned_kg: null | number;
    mass_returned_lbs: null | number;
    flight_time_sec: null | number;
    manifest: null | string;
    water_landing: null | boolean;
    land_landing: null | boolean;
  };
    public name!: string; /* Nome do payload. */
    public type!: string; /* Tipo de payload. */
    public reused!: boolean; /* Indica se o payload é reutilizado. */
    public launch!: string; /* ID do lançamento associado ao payload. */
    public customers!: string[]; /* Clientes do payload. */
    public norad_ids!: number[]; /* IDs NORAD associados ao payload. */
    public nationalities!: string[]; /* Nacionalidades associadas ao payload. */
    public manufacturers!: string[]; /* Fabricantes do payload. */
    public mass_kg!: number; /* Massa do payload em quilogramas. */
    public mass_lbs!: number; /* Massa do payload em libras. */
    public orbit!: string; /* Órbita do payload. */
    public reference_system!: string; /* Sistema de referência do payload. */
    public regime!: string; /* Regime orbital do payload. */
    public longitude!: null | number; /* Longitude do payload. */
    public semi_major_axis_km!: number; /* Semi-eixo maior do payload em quilômetros. */
    public eccentricity!: number; /* Excentricidade do payload. */
    public periapsis_km!: number; /* Periápsis do payload em quilômetros. */
    public apoapsis_km!: number; /* Apoápsis do payload em quilômetros. */
    public inclination_deg!: number; /* Inclinação do payload em graus. */
    public period_min!: number; /* Período orbital do payload em minutos. */
    public lifespan_years!: number; /* Tempo de vida útil do payload em anos. */
    public epoch!: string; /* Época do payload. */
    public mean_motion!: number; /* Movimento médio do payload. */
    public raan!: number; /* RAAN (Right Ascension of the Ascending Node) do payload. */
    public arg_of_pericenter!: number; /* Argumento do periapsis do payload. */
    public mean_anomaly!: number; /* Anomalia média do payload. */
    public id!: string; /* ID do payload. */

    static associate(models: any) {
    // Relação 1 para 1 com Launch
        Payload.hasOne(models.Launch, {
            foreignKey: "payloadId",
            as: "payload",
        });
    }
}

Payload.init(
    {
        dragon: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reused: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        launch: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customers: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        norad_ids: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
        nationalities: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        manufacturers: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        mass_kg: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        mass_lbs: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        orbit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reference_system: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        regime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        semi_major_axis_km: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        eccentricity: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        periapsis_km: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        apoapsis_km: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        inclination_deg: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        period_min: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        lifespan_years: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        epoch: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mean_motion: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        raan: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        arg_of_pericenter: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        mean_anomaly: {
            type: DataTypes.NUMBER,
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
        modelName: "Payload",
        tableName: "payloads",
    }
);

export default Payload;

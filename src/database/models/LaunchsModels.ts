import { Model, DataTypes } from "sequelize";
import db from ".";

interface Reddit {
    campaign: string;  // URL da campanha relacionada ao lançamento
    launch: string;  // URL da discussão oficial do lançamento
    media: string;  // URL da discussão de mídia relacionada ao lançamento
    recovery: null;  // Valor nulo indicando que não há URL de recuperação disponível
  }
  
  interface Flickr {
    small: string[];  // Array de URLs de imagens pequenas
    original: string[];  // Array de URLs de imagens originais
    presskit: string;  // URL da foto do presskit do lançamento
    webcast: string;  // URL da discussão de transmissão ao vivo do lançamento
    youtube_id: string;  // ID do vídeo do YouTube relacionado ao lançamento
    article: string;  // URL da discussão oficial do lançamento
    wikipedia: string;  // URL da página da Wikipedia relacionada ao lançamento
  
  }
  

class Launch extends Model {
    public links !: object /*  Contém vários links relacionados ao lançamento, como links para imagens, páginas de mídia social, documentos de imprensa, transmissão ao vivo, etc. */;
    public reddit !: Reddit; /*  Contém vários links relacionados ao lançamento, como links para imagens, páginas de mídia social, documentos de imprensa, transmissão ao vivo, etc. */
    public flickr !: Flickr; /*  Contém vários links relacionados ao lançamento, como links para imagens, páginas de mídia social, documentos de imprensa, transmissão ao vivo, etc. */
    public tdb !: boolean; /* Um valor booleano que indica se a data de lançamento é "Para Ser Determinado" (To Be Determined). */
    public net !: boolean; /*  Indica se a data de lançamento é "No Earlier Than" (Não Antes de). Geralmente usado quando a data de lançamento é estimada, mas não confirmada. */
    public window !: number; /*  Indica o período de tempo que o lançamento está disponível para ser lançado. */
    public rocket !: string; /* Uma matriz vazia ou contendo informações sobre quaisquer falhas ocorridas durante o lançamento. */
    public success !: boolean; /* Um valor booleano que indica se o lançamento foi bem-sucedido. */
    public failures !: object[]; /* Uma matriz vazia ou contendo informaçães sobre quaisquer falhas ocorridas durante o lançamento. */
    public details !: string; /*  Fornece detalhes adicionais sobre o lançamento, como sua finalidade, carga útil, local de lançamento, etc */
    public crew !: string[]; /* Uma matriz vazia ou contendo informaçães sobre quaisquer membros da equipe que participaram do lançamento. */
    public ships !: string[]; /*  Lista de navios envolvidos no lançamento. */
    public capsules !: string[]; /* Lista de IDs das cápsulas envolvidas no lançamento. */
    public payloads !: string[]; /* Lista de IDs das cargas úteis envolvidas no lançamento. */
    public launchpad !: string; /*  O ID do local de lançamento */
    public upcoming !: boolean; // Se o valor de "upcoming" for true, significa que o lançamento é futuro e ainda não aconteceu. Se for false, indica que o lançamento já ocorreu ou está em andamento.
    public cores !: object[]; // representa as informações relacionadas aos núcleos dos foguetes usados no lançamento. Cada objeto dentro do campo "cores" representa um núcleo específico.

    public autoUpdate !:  boolean; // Um valor booleano que indica se os detalhes do lançamento são atualizados automaticamente.
    public name !:  string; // Nome do lançamento
    public dateUtc !: string; // Data de lançamento UTC
    public dateUnix !: number; // Data de lançamento Unix
    public dateLocal !: string; // A data e hora do lançamento em formato local.
    public datePrecision !: string; // A precisão da data de lançamento.
    public dateTbd !: boolean; // Se o valor de "dateTbd" for true, significa que a data de lançamento é "Para Ser Determinado" (To Be Determined).
    public dateTbdPrecision !: string; // A precisão da data de lançamento.
    public dateTbdWindow !: number; // A precisão da data de lançamento.
    public id !: string;

    static associate(models: any) {
        // Relação 1 para 1 com Rocket
        Launch.belongsTo(models.Rocket, {
            foreignKey: "rocketId",
            as: "rocket",
        });
    
        // Relação muitos para muitos com Capsule
        Launch.belongsToMany(models.Capsule, {
            through: "LaunchCapsules",
            foreignKey: "launchId",
            otherKey: "capsuleId",
            as: "capsules",
        });
    
        // Relação muitos para 1 com Payload
        Launch.hasMany(models.Payload, {
            foreignKey: "launchId",
            as: "payloads",
        });
    
        // Relação 1 para muitos com LaunchPad
        Launch.belongsTo(models.LaunchPad, {
            foreignKey: "launchPadId",
            as: "launchPad",
        });
    
        // Relação muitos para muitos com Core
        Launch.belongsToMany(models.Core, {
            through: "LaunchCores",
            foreignKey: "launchId",
            otherKey: "coreId",
            as: "cores",
        });
    }
}


Launch.init(
    {   
        links: { 
            type: DataTypes.JSON,
            allowNull: false,
        },
        reddit: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        flickr: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        tdb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: "tdb",
        },
        net: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: "net",
        },
        window: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: "window",
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        success: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        failures: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
            field: "failures",
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "details",
        },
        crew: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        cores: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
            field: "cores",
        },
        ships: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
            field: "ships",
        },
        capsules: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
            field: "capsules",
        },
        payloads: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
            field: "payloads",
        },
        launchpad: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "launchpad",
        },
        upcoming: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: "upcoming",
        },
        autoUpdate: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: "auto-update",
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "name",
        },           
        dateUtc: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "date_utc",
        },
        dateUnix: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "date_unix",
        },
        dateLocal: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "date_local",
        },
        datePrecision: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "date_precision",
        },
        dateTbd: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: "date_tbd",
        },
        dateTbdPrecision: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "date_tbd_precision",
        },
        dateTbdWindow: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "date_tbd_window",
        },
        
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
    
    },
    {
        sequelize: db, // Conexão com o banco de dados
        modelName: "Launch", 
        tableName: "launchs", 
        freezeTableName: true, 
        underscored: true, 
        paranoid: true, 
        charset: "utf8", // Charset da tabela (opcional)
        timestamps: false, // Defina como false se não quiser adicionar colunas de timestamps
    }
);

export default Launch;

import Sequelize from "sequelize";
import { join } from "path";

const env = process.env.NODE_ENV || "development";
const config = require(join(__dirname, "./config/config.js"))[env];

class Database {
    public connection!: Sequelize.Sequelize;

    constructor() {
        this.init();
    }

    init(): void {
        this.connection = new Sequelize.Sequelize(config);
    }
}

const database: Database = new Database();

export default database;

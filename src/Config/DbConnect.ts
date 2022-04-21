import { Sequelize } from "sequelize"

const dbName = 'whitelabel'
const dbUser = 'root'
const dbHost = 'localhost'
const dbDriver = 'mysql'
const dbPassword = 'root'

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
})

export default sequelizeConnection

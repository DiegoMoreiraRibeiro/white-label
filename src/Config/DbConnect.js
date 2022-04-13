import Sequelize from 'sequelize';

const sequelize = new Sequelize('whitelabel', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = sequelize;
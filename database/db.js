const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('catalog_music', 'jvlogs', 'jsa181805', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;

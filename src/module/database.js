const Sequelize = require('sequelize')
const config = require('../config/' + process.env.NODE_ENV)



const sequelize = new Sequelize(config.database.database, config.database.user, config.database.password,{
    host: config.database.host,
    dialect: config.database.dialect,
    port: config.database.porta,
    dialectOptions:config.database.dialectOptions
})
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));
module.exports = sequelize




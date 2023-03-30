const db = require('../database.js')
const Sequelize = require('sequelize')

const userTable = db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false

    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
console.log('tabela criada')

module.exports = userTable
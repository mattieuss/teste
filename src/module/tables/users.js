const db = require('../database.js')

db.define('users',{
    id:{
        type:db.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nome:{
        type:db.STRING,
        allowNull:false

    },
    senha:{
        type:db.STRING,
        allowNull:false
    }
})
console.log('tabela criada')
module.exports = db
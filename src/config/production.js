module.exports={
    host:{
        port: process.env.PORT || 8080
    },
    database:{
        host: 'dpg-cgi9jk7dvk4vd51sifsg-a.oregon-postgres.render.com',
        user:'matheus',
        password:'v6d5j4Q4Qxfgw02ecedcai5F7tWJiRvy',
        database:'cfinder_9pst',
        dialect:'postgres',
        porta: 5432,
        dialectOptions:{
            ssl:{
                require:'true'
            }
        }
    }
}
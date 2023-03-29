const express = require('express')
const config = require('./config/' + process.env.NODE_ENV)
const database = require('./module/database.js')

const app = express()

app.set('port', config.port)
app.get('/', (req, res)=>{
    res.send('hello world')
})
port = config.host.port
app.listen(port,()=>{
    console.log(`o servidor está rodando na porta${port} `)
})
const express = require('express')
const config = require('./config/' + process.env.NODE_ENV)
const database = require('./module/database.js')
const Usuario = require('./controller/Users.js')
const usuario = new Usuario();
const app = express()
const bp = require('body-parser')

app.use(bp.json())
app.set('port', config.port)
app.get('/', (req, res)=>{
    res.send('hello world')
})
port = config.host.port
app.listen(port,()=>{
    console.log(`o servidor está rodando na porta${port} `)
})

app.post('/cadastrar', (req, res)=>{
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha  = req.body.senha;
    usuario.cadastrar(usuario.nome, usuario.email, usuario.senha)
    console.log(req.body)
    res.sendStatus(200)
})
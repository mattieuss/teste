const userTable = require('../module/tables/users.js')
const database =  require('../module/database.js')
class Users{
    _NOME;
    _SENHA;
    _EMAIL;
    constructor(nome, email, senha){

    }
    get nome(){
        return this._NOME
    }
    set nome(valor){
        const caracteres = "1234567890-=,.;/][\/?°¹²³£¢¬§ª°º!@#$%¨&*()_+{`}^?:>?:<><||"
        for(let i=0; i< valor.length; i++){
            for(let j=0; j<caracteres.length; j++){
                if(valor[i]==caracteres[i]){
                    console.log('o nome contem caracteres. não pode.')
                    return
                }
            }

        }
        this._NOME = valor
    }
    get email(){
        return this._EMAIL
    }
    set email(valor){
        
        this._EMAIL = valor
    }
    get senha(){
        return this._SENHA
    }
    set senha(valor){
        if(valor.length<8){
            return;
        }
        this._SENHA = valor
    }


    cadastrar(nome, email, senha){
        console.log(nome, email, senha)
        const cadastrar = async function (){
            const cadastro = await userTable.create({
                nome:`${nome}`,
                email:`${email}`,
                senha:`${senha}`
            }).then(()=>{
                console.log("foi")
            }).catch(()=>{
                console.log('não foi')
            })
        }
        console.log(nome, email, senha)
        cadastrar()
    }
}
module.exports = Users
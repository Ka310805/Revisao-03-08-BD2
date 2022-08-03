/* configurações do servidor - início */
//carregar o módulo do express
const express = require('express')
// executar o módulo express 
const app = express()
// definir a pasta dos arquivos ejs
app.set('views','./')
// criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/* configurações do servidor - fim */

/* configuração do bamco de dados - início */
// importaro módulo mongoose
const mongoose = require('mongoose')
// configurar o script de conexão 
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:ka310805@fiaptecnico.g4zhz.mongodb.net/revisao?retryWrites=true&w=majority')
}
//configurar o medelo coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
// definir modelo para a coleção alunos
const alunos = mongoose.model('alunos',modelo)

/* configuração do banco de dados - fim */

/* rota para a requisição */
app.get('/',async(req,res)=>{
    conexao()
    // pesquisar os documentosna collection alunos
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('Funcionando')
    res.render('index.ejs',{resultado})
})
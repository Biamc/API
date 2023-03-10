require('express-async-errors')

const migrationsRun = require('./database/sqlite/migrations') //importando o banco de dados

const AppError = require('./utils/AppError')

const express = require('express')

const routes = require('./routes') 

migrationsRun()//conexão com o banco de dados, execução do banco de dados

const app = express()
app.use(express.json())// a nossa aplicação deve saber em qual formato as informações vao chegar, assim deve ser utilizado a função use, especificando qual tipo de arquivo está sendo utilizado


app.use(routes)

// app.get('/menssage/:id/:user', (request, response) => {

//   const { id, user } = request.params //desestruturação de request.params.user & request.params.id

//   response.send(`ID da menssagem ${id}. Parao usuário: ${user}`)
// })
// '' -> coloca o endereço da rota
//o expresse é quem ajuda a gerenciaras requesiçoes

// app.get('/users', (request, response) => {
//   const {page, limit} = request.query

//   response.send(`Página ${page}. Mostrar ${limit}`)
// })

app.use((error, request, response, next) => {
if(error instanceof AppError){
  return response.status(error.statusCode).json({
    status:'error',
    message: error.message
  })
}

return response.status(500).json({
  status:'error',
  message: 'Internal server error'
})

})

const PORT = 3333

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))


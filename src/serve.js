
const express = require('express')


const app = express()

app.get('/menssage/:id/:user', (request, response) => {

  const { id, user } = request.params //desestruturação de request.params.user & request.params.id

  response.send(`ID da menssagem ${id}. Parao usuário: ${user}`)
})
// '' -> coloca o endereço da rota
//o expresse é quem ajuda a gerenciaras requesiçoes

app.get('/users', (request, response) => {
  const {page, limit} = request.query

  response.send(`Página ${page}. Mostrar ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))


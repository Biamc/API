const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  const {name, email, password} = request.body

  //response.send(`Usuário: ${name}. E-maiil: ${email}. Password: ${password}`)// response por meio do send

  response.json({name, email, password})// response por meio do json// padrão mais utilizado
})

module.exports = usersRoutes //esta exportzando para quem utilizar este arquivo poder utilizar
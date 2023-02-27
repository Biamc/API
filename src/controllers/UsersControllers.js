const AppError = require('../utils/AppError')

class UsersController {
 /*
 ### u controle pode ter no maximo 5 metodos/funções

 index - GET para listar vários registros
 show - GET para  exibir um registro específico
 create - post para ciar um registro
 update - put para atualizar um registro
 delete - delete para remover um registro
 */

 create(request, response) {
  const {name, email, password} = request.body
  //response.send(`Usuário: ${name}. E-maiil: ${email}. Password: ${password}`)// response por meio do send

  if (!name) {
    throw new AppError('o nome é obrigatório')
  }

  response.status(201).json({name, email, password})// response por meio do json// padrão mais utilizado
 }


}

module.exports = UsersController
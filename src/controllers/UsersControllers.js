const {has, hash} = require('bcryptjs')

const AppError = require('../utils/AppError')

const sqliteConection = require('../database/sqlite')

class UsersController {
 /*
 ### u controle pode ter no maximo 5 metodos/funções

 index - GET para listar vários registros
 show - GET para  exibir um registro específico
 create - post para ciar um registro
 update - put para atualizar um registro
 delete - delete para remover um registro
 */

 async create(request, response) {
  const {name, email, password} = request.body
  //response.send(`Usuário: ${name}. E-maiil: ${email}. Password: ${password}`)// response por meio do send

  const database = await sqliteConection()

  const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

  //o ? vai ser substituido pelo conteudo do [], na ordem que aparecer

  if (checkUserExists){
    throw new AppError('Este e-mail já está cadastrado')
  }

  const hashedPassword = await hash(password, 8) //(senha, fator de complexidade)

  await database.run(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]
    )

  // if (!name) {
  //   throw new AppError('o nome é obrigatório')
  // }

  // response.status(201).json({name, email, password})// response por meio do json// padrão mais utilizado
  return response.status(201).json()

 }


}

module.exports = UsersController
const { Router } = require("express")

const UsersController =  require('../controllers/UsersControllers')

const usersRoutes = Router()

// function myMiddleware(request, response, next){
//   console.log('voce passou pelo middleware')
//   // if (!request.body.isAdmin){
//   //   return response.json({message: 'user unauthorized'})
//   // }

//   next()// é a função do middler que chama o destino
// }

const usersController = new UsersController()

// usersRoutes.use(myMiddleware) //para aplicar o middleware em toda a aplicação
// usersRoutes.post('/', myMiddleware, usersController.create)
usersRoutes.post('/', usersController.create)


module.exports = usersRoutes //esta exportzando para quem utilizar este arquivo poder utilizar
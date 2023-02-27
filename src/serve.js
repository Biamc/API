// criar arquivo para importar o express. écomo se vc pegasse todas as funçoes do express e colocasse em uma constante

const express = require('express')

//criar outra constante para inicializar o express

const app = express()

//qual porta ele(express) ficara observando as requisiçoes

// criar uma constante a qual vai poder atender as requisições(requests), e 
//endereço de onde a API vai ficar observando as request e devolvendo as response
const PORT = 3333

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))

//pode ser simplificado essa experiencia execuçaõ da aplicação
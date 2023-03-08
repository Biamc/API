const config = require('../../../knexfile')//para trazer as configurações do knex
const knex = require('knex')

const connection = knex(config.development)//criaa conexão, passando quais são ad configurações de conexão

module.exports = connection
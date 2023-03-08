
exports.up = knex => knex.schema.createTable('notes', table => {
  table.increments('id')
  table.text('title')
  table.text('description')
  table.integer('user_id').references('id').inTable('users')//criando um campo, do tipo inteiro, que ele faz uma referencia ao id q existe dentro da tabela do usuário, nao dá p criar uma nota sem o usuário
  table.timestamp('created_at').default(knex.fn.now()) // knex.fn.now / fn = function, now = nome da função que dá a data 
  table.timestamp('updated_at').default(knex.fn.now())
}), //crie uma tabela com o nome notes

exports.down = knex => knex.schema.dropTable('notes')

//  up - processo de criar tabela
// down - processo de deletar a tabela
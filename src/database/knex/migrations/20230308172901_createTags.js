
exports.up = knex => knex.schema.createTable('tags', table => {
  table.increments('id')
  table.text('name').notNullable()//notNullable() = não aceita o campo nulo
  table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE')// onDelete('CASCADE')= SE DELETAR A NOTA A qual a tag está vinculada, a tag tbm sera deletada
  table.integer('user_id').references('id').inTable('users')
  
})
exports.down = knex => knex.schema.dropTable('tags')

//  up - processo de criar tabela
// down - processo de deletar a tabela


const path = require('path');//importação do path
const connection = require('./src/database/knex');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db')// p lidar com o endereço dos arquivos sem depender do sistema operacional
    }, 
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
    },
    // onDelete() = por padrao a uncionalidade sqlite de deletar por casacata é desabilitada por padrão. Assim é necessário rodar a propriedade pool {afterCreate}

    useNullAsDefault: true,
    // propriedade padrão

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    }
  }//esse objeto tem propriedade de conexao entre o knex e o banco de dados.

 

};

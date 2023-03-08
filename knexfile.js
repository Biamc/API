
const path = require('path')//importação do path

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db')// p lidar com o endereço dos arquivos sem depender do sistema operacional
    }, 

    useNullAsDefault: true,
    // propriedade padrão

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    }
  }//esse objeto tem propriedade de conexao entre o knex e o banco de dados.

 

};

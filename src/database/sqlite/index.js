const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require('path')

async function sqliteConection () {
  const database = await sqlite.open({
    filename: path.resolve(__dirname/*pegade forma automática onde vc estar com o seu projeto*/, '..' /*volta uma pasta p trás, pasta database */, 'database.db'/*criação de um arqivo .db */),
    // como cada sist. operacional tem o seu sistema de estrutura de navegação de diretórios, assin é necesssário utilizar a biblioteca do node - path
  driver: sqlite3.Database/*drive de conexão*/
  }) 
  return database
}

module.exports = sqliteConection

//  SGBD - Sistema Gerenciador de Banco de Dados

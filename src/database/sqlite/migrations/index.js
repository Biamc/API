const sqliteConection = require('../../sqlite')

const createUsers = require('./createUsers')

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join('')// junta toas a migrations, e usando nada para separa-las

  sqliteConection().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = migrationsRun
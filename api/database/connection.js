var DB = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'patricio123',
      database : 'store'
    }
  });

module.exports = DB
const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'esim',
  password: '',
  database: 'arviointitietokanta'
});
module.exports = connection;
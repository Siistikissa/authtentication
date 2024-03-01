const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (paivamaara,arvosana,idopiskelija,idopintojakso) values(?,?,?,?)',
      [arviointi.paivamaara, arviointi.arvosana,arviointi.idopiskelija,arviointi.idopintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=?,arvosana=?,idopiskelija=?,idopintojakso=? where idarviointi=?',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.idopiskelija, arviointi.idopintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;
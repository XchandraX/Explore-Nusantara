const db = require('../config/db');

const Wisata = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM wisata', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM wisata WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO wisata SET ?', data, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE wisata SET ? WHERE id = ?', [data, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM wisata WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
};

module.exports = Wisata;

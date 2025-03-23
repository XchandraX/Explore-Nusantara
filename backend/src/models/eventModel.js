const db = require('../config/db');

const Event = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM events', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM events WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO events SET ?', data, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE events SET ? WHERE id = ?', [data, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM events WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
};

module.exports = Event;

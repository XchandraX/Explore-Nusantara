const db = require('../config/db');

const Rating = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM rating', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  getByUserId: (user_id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM rating WHERE user_id = ?', [user_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  getByPlaceId: (place_id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM rating WHERE place_id = ?', [place_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO rating SET ?', data, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE rating SET ? WHERE id = ?', [data, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM rating WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
};

module.exports = Rating;

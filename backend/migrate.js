const db = require('./src/config/db');
const fs = require('fs');

// Baca file schema.sql
const schema = fs.readFileSync(__dirname + '/../database/schema.sql', 'utf8');

const queries = schema.split(';'); // Pisahkan setiap perintah SQL

(async () => {
  for (let query of queries) {
    if (query.trim()) {
      try {
        await new Promise((resolve, reject) => {
          db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          });
        });
        console.log(`✅ Query sukses: ${query.trim().split('\n')[0]}`);
      } catch (err) {
        console.error(`❌ Error saat menjalankan query:`, err.sqlMessage);
      }
    }
  }
  db.end();
  console.log("✅ Migrasi database selesai.");
})();

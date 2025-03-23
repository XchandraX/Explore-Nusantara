const db = require('./src/config/db');
const fs = require('fs');

const schema = fs.readFileSync(__dirname + '/../database/schema.sql', 'utf8');

(async () => {
  try {
    for (let query of schema.split(';')) {
      if (query.trim()) await db.query(query);
    }
    console.log("✅ Migrasi database selesai.");
  } catch (err) {
    console.error('❌ Error saat migrasi:', err.message);
  } finally {
    db.end();
  }
})();

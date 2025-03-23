const db = require('./src/config/db');
const fs = require('fs');

const schemaPath = __dirname + '/../database/schema.sql';
console.log(`🔍 Membaca file: ${schemaPath}`);

(async () => {
  try {
    const schema = fs.readFileSync(schemaPath, 'utf8');
    const queries = schema.split(';');

    for (let query of queries) {
      if (query.trim()) {
        try {
          console.log(`🔹 Menjalankan query: ${query.trim().split('\n')[0]}`);
          await db.query(query); 
          console.log(`✅ Query sukses`);
        } catch (err) {
          console.error(`❌ Error saat menjalankan query:\n${query}\n`, err.message);
        }
      }
    }
    
    await db.end();
    console.log("✅ Migrasi database selesai.");
  } catch (err) {
    console.error('❌ Gagal membaca file schema.sql:', err.message);
  }
})();

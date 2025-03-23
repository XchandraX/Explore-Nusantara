const pool = require('../config/db');

class User {
    static async getAll() {
        const [rows] = await pool.query('SELECT id, username, email, role FROM users');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT id, username, email, role FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async getByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }

    static async create({ username, email, password, role }) {
        await pool.query('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)', 
                         [username, email, password, role]);
    }

    static async update(id, data) {
        await pool.query('UPDATE users SET ? WHERE id = ?', [data, id]);
    }

    static async delete(id) {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

module.exports = User;

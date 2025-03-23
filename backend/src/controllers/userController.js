const User = require('../models/userModel');

exports.getAllUsers = async (request, h) => {
    try {
        const users = await User.getAll();
        return h.response(users).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

exports.register = async (request, h) => {
    try {
        const { username, email, password, role } = request.payload;
        await User.create({ username, email, password, role });
        return h.response({ message: 'Registrasi berhasil' }).code(201);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

exports.login = async (request, h) => {
    try {
        const { email, password } = request.payload;
        const user = await User.getByEmail(email);

        if (!user || user.password !== password) {
            return h.response({ error: 'Email atau password salah' }).code(401);
        }

        return h.response({ message: 'Login berhasil', user }).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

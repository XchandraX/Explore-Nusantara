const userController = require('../controllers/userController');

const userRoutes = [
  { method: 'GET', path: '/users', handler: userController.getAllUsers },
  { method: 'POST', path: '/register', handler: userController.register },
  { method: 'POST', path: '/login', handler: userController.login }
];

module.exports = userRoutes;

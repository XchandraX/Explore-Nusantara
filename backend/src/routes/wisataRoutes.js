const wisataController = require('../controllers/wisataController');

const wisataRoutes = [
  { method: 'GET', path: '/wisata', handler: wisataController.getAllWisata },
  { method: 'GET', path: '/wisata/{id}', handler: wisataController.getWisataById },
  { method: 'POST', path: '/wisata', handler: wisataController.createWisata },
  { method: 'PUT', path: '/wisata/{id}', handler: wisataController.updateWisata },
  { method: 'DELETE', path: '/wisata/{id}', handler: wisataController.deleteWisata }
];

module.exports = wisataRoutes;

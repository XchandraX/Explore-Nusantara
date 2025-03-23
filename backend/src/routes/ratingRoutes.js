const ratingController = require('../controllers/ratingController');

const ratingRoutes = [
  { method: 'GET', path: '/rating', handler: ratingController.getAllRatings },
  { method: 'GET', path: '/rating/user/{user_id}', handler: ratingController.getRatingsByUser },
  { method: 'GET', path: '/rating/place/{place_id}', handler: ratingController.getRatingsByPlace },
  { method: 'POST', path: '/rating', handler: ratingController.createRating },
  { method: 'PUT', path: '/rating/{id}', handler: ratingController.updateRating },
  { method: 'DELETE', path: '/rating/{id}', handler: ratingController.deleteRating }
];

module.exports = ratingRoutes;

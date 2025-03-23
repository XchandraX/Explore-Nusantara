const eventController = require('../controllers/eventController');

const eventRoutes = [
  { method: 'GET', path: '/events', handler: eventController.getAllEvents },
  { method: 'GET', path: '/events/{id}', handler: eventController.getEventById },
  { method: 'POST', path: '/events', handler: eventController.createEvent },
  { method: 'PUT', path: '/events/{id}', handler: eventController.updateEvent },
  { method: 'DELETE', path: '/events/{id}', handler: eventController.deleteEvent }
];

module.exports = eventRoutes;

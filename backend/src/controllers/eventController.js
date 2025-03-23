const Event = require('../models/eventModel');

exports.getAllEvents = async (request, h) => {
  try {
    const events = await Event.getAll();
    return h.response(events).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getEventById = async (request, h) => {
  try {
    const { id } = request.params;
    const event = await Event.getById(id);
    if (!event) {
      return h.response({ message: 'Event tidak ditemukan' }).code(404);
    }
    return h.response(event).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.createEvent = async (request, h) => {
  try {
    const { event_name, event_place, event_date, event_about, event_img } = request.payload;
    await Event.create({ event_name, event_place, event_date, event_about, event_img });
    return h.response({ message: 'Event berhasil ditambahkan' }).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.updateEvent = async (request, h) => {
  try {
    const { id } = request.params;
    const { event_name, event_place, event_date, event_about, event_img } = request.payload;
    await Event.update(id, { event_name, event_place, event_date, event_about, event_img });
    return h.response({ message: 'Event berhasil diperbarui' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.deleteEvent = async (request, h) => {
  try {
    const { id } = request.params;
    await Event.delete(id);
    return h.response({ message: 'Event berhasil dihapus' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

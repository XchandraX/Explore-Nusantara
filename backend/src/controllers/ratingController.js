const Rating = require('../models/ratingModel');

exports.getAllRatings = async (request, h) => {
  try {
    const ratings = await Rating.getAll();
    return h.response(ratings).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getRatingsByUser = async (request, h) => {
  try {
    const { user_id } = request.params;
    const ratings = await Rating.getByUserId(user_id);
    return h.response(ratings).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getRatingsByPlace = async (request, h) => {
  try {
    const { place_id } = request.params;
    const ratings = await Rating.getByPlaceId(place_id);
    return h.response(ratings).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.createRating = async (request, h) => {
  try {
    const { user_id, place_id, user_rating } = request.payload;
    if (user_rating < 1 || user_rating > 5) {
      return h.response({ error: 'Rating harus antara 1-5' }).code(400);
    }
    await Rating.create({ user_id, place_id, user_rating });
    return h.response({ message: 'Rating berhasil ditambahkan' }).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.updateRating = async (request, h) => {
  try {
    const { id } = request.params;
    const { user_rating } = request.payload;
    if (user_rating < 1 || user_rating > 5) {
      return h.response({ error: 'Rating harus antara 1-5' }).code(400);
    }
    await Rating.update(id, { user_rating });
    return h.response({ message: 'Rating berhasil diperbarui' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.deleteRating = async (request, h) => {
  try {
    const { id } = request.params;
    await Rating.delete(id);
    return h.response({ message: 'Rating berhasil dihapus' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

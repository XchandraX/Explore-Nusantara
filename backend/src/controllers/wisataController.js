const Wisata = require('../models/wisataModel');

exports.getAllWisata = async (request, h) => {
  try {
    const wisata = await Wisata.getAll();
    return h.response(wisata).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getWisataById = async (request, h) => {
  try {
    const { id } = request.params;
    const wisata = await Wisata.getById(id);
    if (!wisata) {
      return h.response({ message: 'Wisata tidak ditemukan' }).code(404);
    }
    return h.response(wisata).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.createWisata = async (request, h) => {
  try {
    const { nama, lokasi, deskripsi, kategori, rating } = request.payload;
    await Wisata.create({ nama, lokasi, deskripsi, kategori, rating });
    return h.response({ message: 'Wisata berhasil ditambahkan' }).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.updateWisata = async (request, h) => {
  try {
    const { id } = request.params;
    const { nama, lokasi, deskripsi, kategori, rating } = request.payload;
    await Wisata.update(id, { nama, lokasi, deskripsi, kategori, rating });
    return h.response({ message: 'Wisata berhasil diperbarui' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.deleteWisata = async (request, h) => {
  try {
    const { id } = request.params;
    await Wisata.delete(id);
    return h.response({ message: 'Wisata berhasil dihapus' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

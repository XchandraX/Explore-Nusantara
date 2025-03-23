const axios = require('axios');

const mlRoutes = [
  {
    method: 'GET',
    path: '/recommend',
    handler: async (request, h) => {
      try {
        const user_id = request.query.user_id;
        if (!user_id) {
          return h.response({ error: 'User ID diperlukan' }).code(400);
        }

       
        const response = await axios.get(`http://127.0.0.1:5001/recommend?user_id=${user_id}`);

        return h.response(response.data).code(200);
      } catch (error) {
        console.error('❌ Error mengambil rekomendasi:', error.message);
        return h.response({ error: 'Gagal mendapatkan rekomendasi' }).code(500);
      }
    },
  },
];

module.exports = mlRoutes;

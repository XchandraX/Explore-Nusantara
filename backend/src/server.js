require('dotenv').config(); 

const Hapi = require('@hapi/hapi');
const Jwt = require('hapi-auth-jwt2');
const userRoutes = require('./routes/userRoutes');
const wisataRoutes = require('./routes/wisataRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ratingRoutes = require('./routes/ratingRoutes'); 

const validate = async (decoded, request, h) => {
  return { isValid: true };
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: 'localhost',
    routes: {
      cors: { origin: ['*'] }
    }
  });

  await server.register(Jwt);

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.JWT_SECRET,
    validate,
    verifyOptions: { algorithms: ['HS256'] }
  });

  server.route([...userRoutes, ...wisataRoutes, ...eventRoutes, ...ratingRoutes]);

  console.log("JWT Secret:", process.env.JWT_SECRET); 

  await server.start();
  console.log(`✅ Server berjalan di ${server.info.uri}`);
};

init().catch(err => {
  console.error('❌ Server gagal dijalankan:', err);
});

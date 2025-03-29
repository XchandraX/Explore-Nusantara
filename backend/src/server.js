const Hapi = require("@hapi/hapi");
const routes = require("./routes");
require("dotenv").config();

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: { cors: { origin: ["*"] } },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

init();

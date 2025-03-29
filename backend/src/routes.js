const {
  getAllPlaces,
  getPlaceById,
  getRecommendedPlaces,
  getUsers,
  registerUser,
  loginUser,
} = require("./handler");

const routes = [
  { method: "GET", path: "/places", handler: getAllPlaces },
  { method: "GET", path: "/places/{id}", handler: getPlaceById },
  {
    method: "GET",
    path: "/recommendations/{place_id}",
    handler: getRecommendedPlaces,
  },
  { method: "GET", path: "/users", handler: getUsers },
  { method: "POST", path: "/auth/register", handler: registerUser },
  { method: "POST", path: "/auth/login", handler: loginUser },
];

module.exports = routes;

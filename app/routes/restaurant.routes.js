const auth = require("../../middleware/auth");

module.exports = (app) => {
  const restaurant = require("../controllers/restaurant.controller.js");

  var router = require("express").Router();

  // Create a new Restaurant
  router.post("/add", restaurant.create);

  // Retrieve Specific Restaurant
  router.post("/", restaurant.findAnyRestaurant);

  // Retrieve All Restaurant
  router.get("/", restaurant.findAllRestaurants);

  // Sort Restaurant by Price
  router.get("/sort/", restaurant.sortAllRestaurants);

  app.use("/api/restaurant", auth, router);
};

const db = require("../models");
const Restaurant = db.restaurant;

// Create and Save a new Restaurant
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Restaurant Name can not be empty!" });
    return;
  }

  if (!req.body.price) {
    res.status(400).send({ message: "Price can not be empty!" });
    return;
  }

  // Create a Restaurant
  const restaurant = new Restaurant({
    name: req.body.name,
    place: req.body.place ? req.body.place : "",
    cuisine: req.body.cuisine ? req.body.cuisine : "",
    price: req.body.price,
  });

  // Save Restaurant in the database
  restaurant
    .save(restaurant)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Restaurant.",
      });
    });
};

// Retrieve Restaurant from the database by name, or place or cuisine.
exports.findAnyRestaurant = (req, res) => {
  const data = req.query.data;

  var condition = {
    $or: [{ name: data }, { place: data }, { cuisine: data }],
  };

  Restaurant.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Restaurants.",
      });
    });
};

// Find all Restaurants
exports.findAllRestaurants = (req, res) => {
  Restaurant.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Restaurants.",
      });
    });
};

// Sort Restaurants by Price
exports.sortAllRestaurants = (req, res) => {
  Restaurant.find({})
    .sort(req.query.sort)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Restaurants.",
      });
    });
};

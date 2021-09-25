module.exports = (mongoose) => {
  const Restaurant = mongoose.model(
    "restaurant",
    mongoose.Schema(
      {
        name: { type: String, required: true },
        place: String,
        cuisine: String,
        price: Number,
      },
      { timestamps: true }
    )
  );

  return Restaurant;
};

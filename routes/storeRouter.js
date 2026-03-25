// External Module
const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");

storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/", storeController.getIndex);
storeRouter.get("/favourite-list", storeController.getFavouriteList);

module.exports = storeRouter;
// registered home ko v destrucutr krlia kyuki hostrouter se multile obj arhethe na to jisko host chahey wo hist lo jisko registeredhomes chaheye wp registered homes lo

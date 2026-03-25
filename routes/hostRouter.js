// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.post("/add-home", hostController.postAddHome);

hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;

// Browser hits POST /add-home  ← URL is defined ✅
//         ↓
// Server responds with homeAdded.html ← just the response
//         ↓
// Browser shows homeAdded.html
//         ↓
// URL still stays /add-home in browser! 👈

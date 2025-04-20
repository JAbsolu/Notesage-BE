const getModuleDecks = require("../../controllers/read/getModuleDecks");
const express = require("express");
const authMiddleware = require("../../middleware/index");

const router = express.Router();

router.get("/", getModuleDecks);

module.exports = router;
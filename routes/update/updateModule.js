const express = require("express");
const authMiddleware = require("../../middleware/index");
const updateModule = require("../../controllers/update/updateModule");

const router = express.Router();

router.put("/", authMiddleware, updateModule);

module.exports = router;
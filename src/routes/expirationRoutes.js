const express = require("express");
const { getActiveCards, getExpiredCards } = require("../controllers/expirationController");

const router = express.Router();

router.get("/active", getActiveCards);
router.get("/expired", getExpiredCards);

module.exports = router;

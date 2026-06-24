const express = require("express");
const router = express.Router();

const {
  createApplication,
} = require("../controllers/loanController");

router.post("/apply", createApplication);

module.exports = router;
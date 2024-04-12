const express = require("express");
const router = express.Router();

//Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const { ContactValidate } = require("../middlewares/ContactValidate");

//Controllers
const {postContact} = require("../controllers/ContactController");

router.post("/", ContactValidate(), ErrorsValidate, postContact);

module.exports = router;
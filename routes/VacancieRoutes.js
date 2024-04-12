const express = require("express");
const router = express.Router();

//Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const { vacancieValidate } = require("../middlewares/VacanciesValidate");

//Controllers
const {postVacancie} = require("../controllers/VacanciesController");

router.post("/", vacancieValidate(), ErrorsValidate, postVacancie);

module.exports = router;

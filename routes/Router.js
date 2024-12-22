const express = require("express");
const router = express();

//Users
router.use("/api/users", require("./UserRoutes"));
//Contact
router.use("/api/contact", require("./ContactRoutes"));
//Projects
router.use("/api/projects", require("./ProjectRoutes"));
//Vacancies
router.use("/api/vacancie", require("./VacancieRoutes"));

//Route primary
router.get("/", (req, res)=> {

  res.send("Master Build");
});

module.exports = router;

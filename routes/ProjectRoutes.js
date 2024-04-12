const express = require("express");
const router = express.Router();

//Middlewares
const ErrorsValidate = require("../middlewares/ErrorsValidate");
const AuthGuard = require("../middlewares/AuthGuard");
const UploadImages = require("../middlewares/UploadImages");
const { postProjectValidate, commentsValidade } = require("../middlewares/ProjectsValidate");

//Controllers
const {
  ProjectPost,
  AllProjects,
  getProject,
  likeProject,
  commentsPhoto
} = require("../controllers/ProjectController");

//POST
router.post(
  "/PostAPI",
  AuthGuard,
  UploadImages.array("image"),
  postProjectValidate(),
  ErrorsValidate,
  ProjectPost
);
//ALL PROJECTS
router.get("/", AllProjects);
//GET PROJECT
router.get("/getProject/:id", getProject);
//LIKE PROJECT
router.put("/:id", AuthGuard, ErrorsValidate, likeProject);
//COMMENTS PROJECT
router.put("/comments/:id", AuthGuard, commentsValidade(), ErrorsValidate, commentsPhoto);

module.exports = router;

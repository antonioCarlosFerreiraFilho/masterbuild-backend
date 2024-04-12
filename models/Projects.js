const mongoose = require("mongoose");
const {Schema} = mongoose;

const SchemaProjects = new Schema(
  {
    image: Array,
    title: String,
    description: String,
    likes: Array,
    comentarios: Array,
    views: Array,
  },
  {
    timestamps: true
  }
);

const Projects = mongoose.model("Projects", SchemaProjects);

module.exports = Projects;
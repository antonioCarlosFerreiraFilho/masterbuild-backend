const Projects = require("../models/Projects");
const User = require("../models/User");

//   Post Projects   //
const ProjectPost = async (req, res) => {

  const image = req.files;
  const { title, description } = req.body;

  try {
    if (image.length === 0 || image.length > 8) {
      return res.status(422).json({ errors: ["VC não tem o Direito."] });
    }

    //create card
    const newProject = await Projects.create({
      title,
      description,
      image: [],
    });

    image.map((img) => {
      newProject.image.push(img.filename);
    });

    const saveDB = await newProject.save();

    return res.status(200).json(saveDB);
  } catch (err) {
    return res.status(422).json({ errors: ["VC não tem o Direito."] });
  }
};

//   All Projects   //
const AllProjects = async (req, res) => {
  const AllProject = await Projects.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(AllProject);
};

//   get Project   //
const getProject = async (req, res) => {
  const { id } = req.params;

  const ProjectDB = await Projects.findById(id);

  if (!ProjectDB) {
    return res.status(404).json({ errors: ["imagem nao encontrada."] });
  }

  res.status(200).json(ProjectDB);
};

//   like Project   //
const likeProject = async (req, res) => {

  const { id } = req.params;
  const reqUser = req.user;

  const ProjectLike = await Projects.findById(id);

  if (!ProjectLike) {
    return res.status(404).json({ errors: ["imagem não encontrada."] });
  }

  if (ProjectLike.likes.includes(reqUser._id)) {
    return res.status(422).json({ error: ["vc já curtiu este post."] });
  }

  ProjectLike.likes.push(reqUser._id);

  await ProjectLike.save();

  res.status(200).json({
    ProjectId: id,
    userId: reqUser._id,
    message: "este post foi curtido.!",
  });
};

//   comments Photo   //
const commentsPhoto = async (req, res) => {

  const { id } = req.params;
  const { comentarios } = req.body;
  const reqUser = req.user;

  const UserCurrent = await User.findById(reqUser._id);
  const projectDB = await Projects.findById(id);

  if (!projectDB) {
    return res.status(404).json({errors: ["Post não encontrado."] });
  }

  const newComments = {
    comentarios,
    userName: UserCurrent.name,
    userId: UserCurrent._id,
  };

  await projectDB.comentarios.push(newComments);

  await projectDB.save();

  res.status(200).json({
    comentarios: newComments,
    message: "comentario Publicado",
  });
};

module.exports = {
  ProjectPost,
  AllProjects,
  getProject,
  likeProject,
  commentsPhoto,
};

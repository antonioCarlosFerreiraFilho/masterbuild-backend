const Vacancies = require("../models/Vacancies");

const postVacancie = async (req, res) => {
  const { name, profession, phone, experience } = req.body;

  const newVacancie = await Vacancies.create({
    name,
    profession,
    phone,
    experience,
  });

  if (!newVacancie) {
    return res
      .status(422)
      .json({ errors: ["Erro ao enviar, tente novamente mais tarde."] });
  }

  return res.status(200).json(newVacancie);
};

module.exports = {
  postVacancie,
};
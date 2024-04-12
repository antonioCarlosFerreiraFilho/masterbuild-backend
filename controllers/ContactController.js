const Contact = require("../models/Contact");

const postContact = async (req, res) => {
  const { name, localidade, phone, description } = req.body;

  const newContact = await Contact.create({
    name,
    localidade,
    phone,
    description,
  });

  if (!newContact) {
    return res
      .status(422)
      .json({ errors: ["Erro ao enviar, tente novamente mais tarde."] });
  }

  return res.status(200).json(newContact);
};

module.exports = {
  postContact,
};

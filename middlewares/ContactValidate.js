const { body } = require("express-validator");

const ContactValidate = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome e obrigatorio")
      .isLength({ min: 4 })
      .withMessage("O nome deve conter no minimo 4 Caracteres.")
      .isLength({ max: 20 })
      .withMessage("O nome deve conter no maximo 20 Caracteres."),
    body("localidade")
      .isString()
      .withMessage("A localidade e obrigatoria.")
      .isLength({ min: 4 })
      .withMessage("A localidade deve conter no minimo 4 Caracteres.")
      .isLength({ max: 25 })
      .withMessage("A localidade deve conter no maximo 25 Caracteres."),
    body("phone")
      .isString()
      .withMessage("O numero de contato e obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O numero deve conter no minimo 4 Caracteres.")
      .isLength({ max: 10 })
      .withMessage("O numero deve conter no maximo 10 Caracteres."),
    body("description")
      .isString()
      .withMessage("A descrição do trabalho e obrigatoria.")
      .isLength({ min: 4 })
      .withMessage(
        "A descrição do trabalho deve conter no minimo 4 Caracteres."
      )
      .isLength({ max: 140 })
      .withMessage(
        "A descrição do trabalho deve conter no minimo 4 Caracteres."
      ),
  ];
};

module.exports = {
  ContactValidate,
};

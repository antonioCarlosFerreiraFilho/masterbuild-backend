const { body } = require("express-validator");

const vacancieValidate = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome e obrigatorio")
      .isLength({ min: 4 })
      .withMessage("O nome deve conter no minimo 4 Caracteres.")
      .isLength({ max: 20 })
      .withMessage("O nome deve conter no maximo 20 Caracteres."),
    body("profession")
      .isString()
      .withMessage("A Profição e obrigatoria.")
      .isLength({ min: 4 })
      .withMessage("A Profição deve conter no minimo 4 Caracteres.")
      .isLength({ max: 25 })
      .withMessage("A Profição deve conter no maximo 25 Caracteres."),
    body("phone")
      .isString()
      .withMessage("O numero de contato e obrigatorio.")
      .isLength({ min: 4 })
      .withMessage("O numero deve conter no minimo 4 Caracteres.")
      .isLength({ max: 15 })
      .withMessage("O numero deve conter no maximo 10 Caracteres."),
    body("experience")
      .isString()
      .withMessage("A Expêriencia de trabalho e obrigatoria.")
      .isLength({ min: 4 })
      .withMessage(
        "a Expêriencia de trablho deve conter no minimo 4 Caracteres."
      )
      .isLength({ max: 140 })
      .withMessage(
        "Faça um breve resumo da sua expêriencia ate 100 caracteres."
      ),
  ];
};

module.exports = {
  vacancieValidate,
};
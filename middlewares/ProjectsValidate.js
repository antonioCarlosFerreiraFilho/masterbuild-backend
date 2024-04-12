const { body } = require("express-validator");

const postProjectValidate = () => {
  return [
    body("title")
      .isString()
      .withMessage("o titulo e obrigatorio."),
    body("description")
      .isString()
      .withMessage("a descriçao e obrigatorio.")
  ];
};

const commentsValidade = ()=> {

  return [

    body("comentarios")
      .isString()
      .withMessage("o comentario e obrigatorio")
      .isLength({min: 5})
      .withMessage("o comentario deve conter no minimo 5 caracteres")
      .isLength({max: 220})
      .withMessage("o comentario deve conter no maximo 220 caracteres")
  ];
};

module.exports = {
  postProjectValidate,
  commentsValidade,
};

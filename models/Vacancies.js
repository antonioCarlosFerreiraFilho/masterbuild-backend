const mongoose = require("mongoose");
const { Schema } = mongoose;

const VacanciesSchema = new Schema(
  {
    name: String,
    profession: String,
    phone: String,
    experience: String,
  },
  {
    timestamps: true,
  }
);

const Vacancies = mongoose.model("Vacancies", VacanciesSchema);

module.exports = Vacancies;
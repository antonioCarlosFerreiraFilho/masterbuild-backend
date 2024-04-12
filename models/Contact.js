const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    name: String,
    localidade: String,
    phone: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
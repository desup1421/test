import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    required: true,
    index: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;

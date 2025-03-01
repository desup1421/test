import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  level: {
    type: String,
    required: false,
  },
  apiKey: {
    type: String,
    required: true,
    index: true,
  },
});

const Skills = mongoose.model("Skills", skillSchema);
export default Skills;

import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    required: true,
    index: true,
  },
});

const Hero = mongoose.model("Hero", heroSchema);
export default Hero;

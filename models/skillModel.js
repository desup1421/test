import mongoose from "mongoose";

const skillSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }, 
    image : {
        type: String,
        required: false
    }, 
    level : {
        type: String,
        required: false
    }
});

const Skills = mongoose.model("Skills", skillSchema);
export default Skills

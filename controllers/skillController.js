import Skills from "../models/skillModel.js";
import cloudinary from "../config/cloudinary.js";

export const getSkill = async (req, res) => {
  try {
    const skill = await Skills.find();
    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.error(`Error: ${error.message}`);
  }
};

export const postSkill = async (req, res) => {
  const skill = req.body;
  const image = req.file;

  // Upload image to cloudinary

  try {
    if (!skill.name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }
    if (!skill.level) {
      return res.status(400).json({
        message: "Level is required",
      });
    }

    if (image) {
      skill.image = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "skill" },
          (error, result) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return reject("internal server error");
            }
            resolve(result.secure_url);
          }
        );

        uploadStream.end(image.buffer);
      });
    }
    const newSkill = new Skills(skill);
    await newSkill.save();
    res.status(201).json({
      success: true,
      data: newSkill,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.error(`Error: ${error.message}`);
  }
};

export const updateSkill = async (req, res) => {
  const { id } = req.params;
  const skill = req.body;
  const image = req.file;

  try {
   const existingSkill = await Skills.findById(id);

    if (!existingSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (image) {
      skill.image = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "skill" },
          (error, result) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return reject("internal server error");
            }
            resolve(result.secure_url);
          }
        );

        uploadStream.end(image.buffer);
      });
    }
    


    const updateSkill = await Skills.findByIdAndUpdate(id, skill, {
      new: true,
    })
    const newSkill = await updateSkill.save();
    res.status(201).json({
      success: true,
      data: newSkill,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.error(`Error: ${error.message}`);
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await Skills.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.error(`Error: ${error.message}`);
  }
};

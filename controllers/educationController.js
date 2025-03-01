import Education from "../models/educationModel.js";

export const getEducation = async (req, res) => {
  const apiKey = req.apiKey;

  try {
    const education = await Education.find({ apiKey }).select("-apiKey");
    res.status(200).json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
    console.error(`Error: ${error.message}`);
  }
};

export const createEducation = async (req, res) => {
  const education = req.body;
  const apiKey = req.apiKey;

  if (!education.degree) {
    return res
      .status(400)
      .json({ success: false, message: "Degree is required" });
  } else if (!education.institution) {
    return res
      .status(400)
      .json({ success: false, message: "Institution is required" });
  } else if (!education.courses) {
    return res
      .status(400)
      .json({ success: false, message: "Courses is required" });
  } else if (!education.startDate) {
    return res
      .status(400)
      .json({ success: false, message: "Start Date is required" });
  } else if (!education.endDate) {
    return res
      .status(400)
      .json({ success: false, message: "End Date is required" });
  }

  const newEducation = new Education({ ...education, apiKey });
  try {
    await newEducation.save();
    const responseData = newEducation.toObject();
    delete responseData.apiKey;
    res.status(201).json({ success: true, data: responseData });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
    console.error(`Error: ${error.message}`);
  }
};

export const updateEducation = async (req, res) => {
  const { id } = req.params;
  const education = req.body;
  const apiKey = req.apiKey;
  try {
    const checkExistingData = await Education.findOne({ _id: id, apiKey });

    if (!checkExistingData) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    }

    const updateEducation = await Education.findByIdAndUpdate(id, education, {
      new: true,
    }).select("-apiKey");
    res.status(200).json({ success: true, data: updateEducation });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
    console.error(`Error: ${error.message}`);
  }
};

export const deleteEducation = async (req, res) => {
  const { id } = req.params;
  const apiKey = req.apiKey;
  try {
    const deletedEducation = await Education.findOneAndDelete({
      _id: id,
      apiKey,
    });

    if (!deletedEducation) {
      return res.status(404).json({
        success: false,
        message: "Education not found or invalid API key",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Education deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
    console.error(`Error: ${error.message}`);
  }
};

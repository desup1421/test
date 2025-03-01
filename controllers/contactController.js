import Contact from "../models/contactModel.js";

export const postContact = async (req, res) => {
  const { name, email, message } = req.body;
  const apiKey = req.apiKey;

  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }
  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }
  if (!message) {
    return res.status(400).json({
      message: "Message is required",
    });
  }

  try {
    const newContact = new Contact({ name, email, message, apiKey });
    await newContact.save();
    res.status(201).json({
      message: "message sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.error(`Error: ${error.message}`);
  }
};

export const getContact = async (req, res) => {
  const apiKey = req.apiKey;

  try {
    const contact = await Contact.find({ apiKey }).select("-apiKey");
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.error(`Error: ${error.message}`);
  }
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  const apiKey = req.apiKey;

  try {
    const deletedContact = await Contact.findOneAndDelete({ _id: id, apiKey });

    if (!deletedContact) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Contact not found or invalid API key",
        });
    }

    res
      .status(200)
      .json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
    console.error(`Error: ${error.message}`);
  }
};

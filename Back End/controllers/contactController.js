const Contact = require("../models/ContactModel");

exports.addContact = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, subject, message } = req.body;
    const emailAuth = req.user.email;

    if (email !== emailAuth) {
      return res.status(201).json({
        success: false,
        message: "The email is incorrect.",
      });
    }

    if (!name || !email || !subject || !message) {
      return res.status(201).json({
        success: false,
        message: "Please fill in all required fields.",
        received: { name, email, subject, message },
      });
    }

    const result = await Contact.addContact({
      name,
      email,
      subject,
      message,
      userId,
    });

    res.status(200).json({
      success: true,
      message: "Contact message added successfully.",
      contactId: result.contactId,
    });
  } catch (error) {
    console.error("Error in addContact:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      error: error.message,
    });
  }
};

// controllers/RequestController.js
const Checkout = require("../models/checkoutModel");
const knex = require("./../config/dbConfig");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// ----------------------------------------------------------------------------
exports.appointment = async (req, res) => {
  try {
    const appointmentID = req.params.id;
    const appointments = await Checkout.getAppointment(appointmentID);
    res.status(200).json({ data: appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(error.status || 500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// ----------------------------------service------------------------------------------

exports.service = async (req, res) => {
  try {
    const serviceID = req.params.id;
    const service = await Checkout.getService(serviceID);
    res.status(200).json({ data: service });
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(error.status || 500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// ----------------------------------confirmPayment------------------------------------------

exports.confirmPayment = async (req, res) => {
  const { 
    orderId, 
    appointmentId, 
    serviceId,
    appointmentData,
    serviceData,
    paymentStatus 
  } = req.body;
console.log("body payments",req.body);

  try {
    const bookingData = await Checkout.confirmPayment({
      userId: req.user.id,
      appointmentData,
      serviceData,
      paymentStatus,
      orderId,
    });

    res.status(200).json({
      success: true,
      message: "Payment confirmed and booking created successfully",
      data: bookingData,
    });

  } catch (error) {
    console.error("Error confirming payment:", error);
    res.status(500).json({
      success: false,
      message: "Failed to confirm payment",
      error: error.message,
    });
  }
};

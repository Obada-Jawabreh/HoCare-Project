// controllers/RequestController.js
const Providers = require("../models/providerModel");
const knex = require("./../config/dbConfig");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

exports.GetProviders = async (req, res) => {
  try {
    const Data = await Providers.GetaAllProviders();
    res.status(200).json({ data: Data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// -----------------------------------------------------------

exports.GetProviderById = async (req, res) => {
  try {
    const providerID = req.params.id;
    const Data = await Providers.GetProviderById(providerID);
    if (!Data) {
      return res
        .status(404)
        .json({ success: false, message: "Provider not found" });
    }
    res.status(200).json({ data: Data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// -----------------------------------------------------------

exports.GetProviderServices = async (req, res) => {
  try {
    const providerID = req.params.id;
    const Data = await Providers.GetProviderServices(providerID);
    if (!Data) {
      return res
        .status(404)
        .json({ success: false, message: "Services not found" });
    }
    res.status(200).json({ data: Data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// -----------------------------------------------------------
exports.getAppointments = async (req, res) => {
  try {
    const userId = req.params.id;
    const appointments = await Providers.getAppointments(userId);
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
// -----------------------------------------------------------
exports.getNursing = async (req, res) => {
  try {
    const Data = await Providers.getNursingProviders(); 
    res.status(200).json({ data: Data });
  } catch (error) {
    console.error("Error fetching nursing providers:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// -----------------------------------------------------------

exports.getPhysiotherapy = async (req, res) => {
  try {
    const Data = await Providers.getPhysiotherapyProviders(); 
    res.status(200).json({ data: Data });
  } catch (error) {
    console.error("Error fetching physiotherapy providers:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
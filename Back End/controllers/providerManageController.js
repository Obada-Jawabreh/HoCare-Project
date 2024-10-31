const Providers = require("../models/ProvidersManageModel");
const knex = require("./../config/dbConfig");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

exports.AddAppointments = async (req, res) => {
  try {
    const { schedule_date, day_of_month, month, start_time, end_time } =
      req.body;

    if (!req.user.id || !schedule_date || !start_time || !end_time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        received: {
          userId: req.user.id,
          schedule_date,
          start_time,
          end_time,
        },
      });
    }

    const result = await Providers.AddAppointments({
      provider_id: req.user.id,
      schedule_date,
      day_of_month,
      month,
      start_time,
      end_time,
      is_available: true,
    });

    res.status(200).json({
      success: true,
      message: "Appointment added successfully",
      scheduleId: result.scheduleId,
    });
  } catch (error) {
    console.error("Error AddAppointments:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


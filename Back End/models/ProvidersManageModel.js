// models/RequestModel.js
const knex = require("./../config/dbConfig");

class Providers {
  // ---------------------------
  static async AddAppointments({
    provider_id,
    schedule_date,
    month,
    day_of_month,
    start_time,
    end_time,
    is_available,
  }) {
    try {
      const [scheduleId] = await knex("provider_schedules")
        .insert({
          provider_id,
          schedule_date,
          month,
          day_of_month,
          start_time,
          end_time,
          is_available,
        })
        .returning("schedule_id");

      return { success: true, scheduleId };
    } catch (error) {
      console.error("Error inserting appointment data:", error);
      throw error;
    }
  }

}

module.exports = Providers;

// models/RequestModel.js
const knex = require("./../config/dbConfig");

class Providers {
  // ---------------------------
  static async GetaAllProviders() {
    try {
      const Provider = await knex("users")
        .leftJoin(
          "applicants_requests",
          "users.user_id",
          "=",
          "applicants_requests.user_id"
        )
        .select("users.*", "applicants_requests.profession")
        .where("users.isApproved", true);

      return Provider;
    } catch (error) {
      console.error("Error fetching Provider data:", error);
      throw error;
    }
  }

  static async GetProviderById(id) {
    try {
      const provider = await knex("users")
        .leftJoin(
          "applicants_requests",
          "users.user_id",
          "=",
          "applicants_requests.user_id"
        )
        .select(
          "applicants_requests.*",
          "users.firstName",
          "users.lastName",
          "users.email",
          "users.phoneNumber",
          "users.profilePicture",
          "users.aboutMe",
          "users.isApproved",
          "users.created_at",
          "users.updated_at"
        )
        .where("users.user_id", id)
        .first();
      return provider;
    } catch (error) {
      console.error("Error fetching provider by ID:", error);
      throw error;
    }
  }
  // --------------------------------

  static async GetProviderServices(id) {
    try {
      const provider = await knex("services")
        .select("*")
        .where({ user_id: id });
      return provider;
    } catch (error) {
      console.error("Error fetching services by ID:", error);
      throw error;
    }
  }
  // --------------------------------
  static async getAppointments(userId) {
    try {
      const appointments = await knex("provider_schedules")
        .select("*")
        .where("provider_id", userId)
        .andWhere("is_available", true);

      const formattedAppointments = appointments.map((appointment) => {
        appointment.schedule_date = new Date(
          appointment.schedule_date
        ).toLocaleDateString();
        return appointment;
      });

      return formattedAppointments;
    } catch (error) {
      console.error("Error retrieving appointment data:", error);
      throw error;
    }
  } // --------------------------------

  static async getNursingProviders() {
    try {
      const nursingProviders = await knex("users")
        .leftJoin(
          "applicants_requests",
          "users.user_id",
          "=",
          "applicants_requests.user_id"
        )
        .select("users.*", "applicants_requests.profession")
        .where("users.isApproved", true)
        .andWhere("applicants_requests.profession", "Home Nurse"); 

      return nursingProviders;
    } catch (error) {
      console.error("Error fetching nursing providers:", error);
      throw error;
    }
  }
  // --------------------------------

  static async getPhysiotherapyProviders() {
    try {
      const physiotherapyProviders = await knex("users")
        .leftJoin(
          "applicants_requests",
          "users.user_id",
          "=",
          "applicants_requests.user_id"
        )
        .select("users.*", "applicants_requests.profession")
        .where("users.isApproved", true)
        .andWhere("applicants_requests.profession", "Physical Therapist"); 

      return physiotherapyProviders;
    } catch (error) {
      console.error("Error fetching physiotherapy providers:", error);
      throw error;
    }
  }
}

module.exports = Providers;

// models/RequestModel.js
const knex = require("./../config/dbConfig");

class Checkout {
  static async getAppointment(appointmentID) {
    try {
      const appointment = await knex("provider_schedules")
        .where({ schedule_id: appointmentID })
        .first();

      if (!appointment) {
        throw new Error(
          `No appointment found with schedule_id: ${appointmentID}`
        );
      }

      appointment.schedule_date = new Date(
        appointment.schedule_date
      ).toLocaleDateString();

      return appointment;

      return formattedAppointments;
    } catch (error) {
      console.error("Error retrieving appointment data:", error);
      throw error;
    }
  }
  // ---------------------------
  static async getService(serviceID) {
    try {
      const service = await knex("services")
        .join("users", "services.user_id", "=", "users.user_id")
        .where({ "services.service_id": serviceID })
        .select(
          "services.*",
          "users.firstName",
          "users.lastName",
          "users.email",
          "users.profilePicture"
        )
        .first();
      if (!service) {
        throw new Error(`No service found with service_id: ${serviceID}`);
      }

      return service;
    } catch (error) {
      console.error("Error retrieving service data:", error);
      throw error;
    }
  }

  // ---------------------------

  static async confirmPayment({
    userId,
    appointmentData,
    serviceData,
    paymentStatus,
    orderId,
  }) {
    const trx = await knex.transaction();

    try {
      const totalPrice = parseFloat(serviceData.price);
      const providerProfit = totalPrice * 0.8;
      const adminProfit = totalPrice * 0.2;

      const [booking] = await trx("bookings")
        .insert({
          user_id: userId,
          provider_id: appointmentData.provider_id,
          service_id: serviceData.service_id,
          schedule_id: appointmentData.schedule_id,
          booking_date: appointmentData.schedule_date,
          booking_time: appointmentData.start_time,
          status: paymentStatus,
          total_price: totalPrice,
          provider_profit: providerProfit,
          admin_profit: adminProfit,
        })
        .returning("booking_id");

      // تحديث جدول provider_schedules لتعليم الموعد كمحجوز
      await trx("provider_schedules")
        .where("schedule_id", appointmentData.schedule_id)
        .update({ is_available: false });

      // تحديث جدول services إذا كان الخدمة تحتاج إلى تعليمها كمحجوزة
      // await trx("services")
      //   .where("service_id", serviceData.service_id)
      //   .update({ is_booked: true });

      await trx.commit();

      return {
        booking_id: booking.booking_id,
        orderId,
        status: paymentStatus,
      };
    } catch (error) {
      await trx.rollback();
      console.error("Error confirming payment:", error);
      throw new Error("Failed to confirm payment");
    }
  }
}
module.exports = Checkout;

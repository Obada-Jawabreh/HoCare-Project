// models/RequestModel.js
const knex = require("./../config/dbConfig");

class Requests {
  static async create(
    userId,
    fullName,
    phoneNumber,
    profession,
    aboutMe,
    certificate,
    licenseToPractice,
    profilePicture,
    resume
  ) {
    try {
      const [newRequest] = await knex("Requests")
        .insert({
          user_id: userId,
          fullName,
          profession,
          aboutMe,
          certificate,
          licenseToPractice,
          resume,
        })
        .returning("*");

      await knex("users").where("user_id", userId).update({
        phoneNumber,
        profilePicture,
      });

      return newRequest;
    } catch (error) {
      console.error("Error creating request:", error);
      throw new Error("Error creating request");
    }
  }
}

module.exports = Requests;

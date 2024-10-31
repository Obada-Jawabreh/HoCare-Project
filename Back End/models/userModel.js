const knex = require("../config/dbConfig");
const bcrypt = require("bcrypt");

class Users {
  static async RegisterUser(firstName, lastName, email, password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const [newUser] = await knex("users")
        .insert({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        })
        .returning("*");

      return newUser;
    } catch (error) {
      console.error("Database Error:", error.message);
      throw new Error("Failed to register user.");
    }
  }
  // ---------------------------login user-----------------------------------------
  static async LoginUser(email, password) {
    try {
      const user = await knex("users").where({ email }).first();
      if (!user) {
        throw new Error("User not found");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }
      return user;
    } catch (error) {
      console.error("Login Error:", error.message);
      throw new Error("Failed to log in.");
    }
  }
  // ---------------------------getUserById-----------------------------------------

  static async getUserById(userId) {
    try {
      // جلب بيانات المستخدم مع طلبات المتقدمين
      const userData = await knex("users")
        .leftJoin("applicants_requests", "users.user_id", "applicants_requests.user_id")
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
        .where("users.user_id", userId)
        .first(); 
  
      const bookings = await knex("bookings")
        .where("bookings.user_id", userId); 
  
      const user = {
        ...userData,
        bookings 
      };
  
      console.log("Fetched user data with bookings:", user);
  
      return user;
    } catch (error) {
      throw new Error("Error fetching user data: " + error.message);
    }
  }
  // static async getUserById(userId) {
  //   try {
  //     const user = await knex("users")
  //       .leftJoin("applicants_requests", "users.user_id", "applicants_requests.user_id")
  //       .select(
  //         "applicants_requests.*",
  //         "users.firstName",
  //         "users.lastName",
  //         "users.email",
  //         "users.phoneNumber",
  //         "users.profilePicture",
  //         "users.aboutMe",
  //         "users.isApproved",
  //         "users.created_at",
  //         "users.updated_at"
  //       )
  //       .where("users.user_id", userId)
  //       .first();

  //     console.log("Fetched user data:", user);
  //     return user;
  //   } catch (error) {
  //     throw new Error("Error fetching user data: " + error.message);
  //   }
  // }

  // --------------------------------------------------------------
  
  static async updateUserById(userId, updateData) {
    try {
        const updatedUser = await knex("users")
            .where({ user_id: userId }) 
            .update(updateData)
            .returning("*"); 

        if (updatedUser.length === 0) {
            throw new Error("User not found");
        }

        console.log("Updated user data:", updatedUser[0]);
        return updatedUser[0]; 
    } catch (error) {
        throw new Error("Error updating user data: " + error.message);
    }
}
}

module.exports = Users;

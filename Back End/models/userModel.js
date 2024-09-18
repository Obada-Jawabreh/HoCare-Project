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
          //   profilePic: null,
          //   bio: "",
          //   isActive: true,
          //   isApproved: false,
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

  static async getUserById(userId) {
    try {
      const user = await knex("users")
        .leftJoin("Requests", "users.user_id", "Requests.user_id") 
        .select(
          "Requests.*",
          "users.email", 
          "users.firstName", 
          "users.lastName" ,
          "users.profilePicture",
          "users.phoneNumber"
        )
        .where("users.user_id", userId) 
        .first(); 
  
      console.log("Fetched user data:", user);
      return user;
    } catch (error) {
      throw new Error("Error fetching user data: " + error.message);
    }
  }
  
}

module.exports = Users;

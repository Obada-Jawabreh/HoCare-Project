exports.up = function (knex) {
  return knex.schema.createTable("Requests", function (table) {
    table.increments("id").primary();

    table.integer("user_id").unsigned().notNullable(); // FK to users
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.string("fullName").notNullable();
    table.string("profession").notNullable();
    table.string("resume");
    table.string("certificate");
    table.string("licenseToPractice");
    table.text("aboutMe").notNullable();
    table.boolean("status").defaultTo(null);

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Requests");
};

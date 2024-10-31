exports.up = async function (knex) {
  await knex.schema.createTable("services", function (table) {
    table.increments("service_id").primary();
    table.integer("user_id").unsigned().notNullable(); // FK to users
  table
    .foreign("user_id")
    .references("user_id")
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
  table.string("name").notNullable();
  table.text("description");
  table.decimal("price", 8, 2).notNullable();
  table.string("category").notNullable(); // e.g., 'physiotherapy', 'home_nursing'
  table.boolean('is_booked').notNullable().defaultTo(false);
  table.timestamps(true, true);
  });

  await knex.raw('SELECT setval(\'services_service_id_seq\', COALESCE((SELECT MAX(service_id) FROM "services"), 1));');
};

exports.down = async function (knex) {
  return knex.schema.dropTable("services");
};

exports.up = async function (knex) {
    await knex.schema.createTable("bookings", function (table) {
        table.increments("booking_id").primary();
        table.integer("user_id").unsigned().notNullable(); // FK to users
        table
          .foreign("user_id")
          .references("user_id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("provider_id")
          .unsigned()
          .notNullable()
          .references("user_id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("service_id")
          .unsigned()
          .notNullable()
          .references("service_id")
          .inTable("services")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("schedule_id")
          .unsigned()
          .notNullable()
          .references("schedule_id")
          .inTable("provider_schedules") 
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.date("booking_date").notNullable();
        table.time("booking_time").notNullable();
        table.string("status").notNullable().defaultTo("pending"); // e.g., 'pending', 'confirmed', 'completed', 'cancelled'
        table.decimal("total_price", 8, 2).notNullable();
        table.decimal("provider_profit", 8, 2).notNullable().defaultTo(0); 
        table.decimal("admin_profit", 8, 2).notNullable().defaultTo(0); 
        table.timestamps(true, true);
    });
  
    await knex.raw('SELECT setval(\'bookings_booking_id_seq\', COALESCE((SELECT MAX(booking_id) FROM "bookings"), 1));');
  };
  
  exports.down = async function (knex) {
    return knex.schema.dropTable("bookings");
  };
  









  
exports.up = async function (knex) {
  await knex.schema.createTable("provider_schedules", function (table) {
    table.increments("schedule_id").primary();
    table
      .integer("provider_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users");
    table.date("schedule_date"); // التاريخ (YYYY-MM-DD)

    // استخدام enu بدلاً من enum
    table.enu("month", [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]);

    table.enu("day_of_month", [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ]);

    table.time("start_time");
    table.time("end_time");
    table.boolean("is_available").defaultTo(true);
    table.timestamps(true, true);
  });

  await knex.raw(
    "SELECT setval('provider_schedules_schedule_id_seq', COALESCE((SELECT MAX(schedule_id) FROM \"provider_schedules\"), 1));"
  );
};

exports.down = async function (knex) {
  return knex.schema.dropTable("provider_schedules"); 
};

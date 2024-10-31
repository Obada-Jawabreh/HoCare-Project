exports.up = async function(knex) {
  await knex.schema.createTable('users', function(table) {
    table.increments('user_id').primary(); 
    table.string('firstName').notNullable(); 
    table.string('lastName').notNullable(); 
    table.string('email').notNullable().unique(); 
    table.string('password').notNullable(); 
    table.string("phoneNumber");
    table.string('profilePicture');
    table.text("aboutMe")
    table.boolean('isActive').defaultTo(true); 
    table.boolean('isApproved').defaultTo(false); 
    table.timestamps(true, true);
  });

  await knex.raw('SELECT setval(\'users_user_id_seq\', COALESCE((SELECT MAX(user_id) FROM users), 1));');
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
// هسا اتوقع المشكلة كونو انا رافع داتا seed مش عامل register ممكن عشان هيك ما بسجل لانه لما يجي يسجل ببلش من واحد ونا اصلا رافع داتا seed وفي واحد 
// كيف حلها 
// SELECT setval('users_user_id_seq', (SELECT MAX(user_id) FROM users));
// SELECT setval('Requests_request_id_seq', (SELECT MAX(request_id) FROM Requests));

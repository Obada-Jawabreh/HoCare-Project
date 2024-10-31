exports.seed = async function(knex) {
  await knex('services').del();

  await knex.raw('SELECT setval(\'services_service_id_seq\', COALESCE((SELECT MAX(service_id) FROM "services"), 1));');

  await knex('services').insert([
        {
          service_id: 1,
          user_id: 1,
          name: 'Physiotherapy Session',
          description: 'One-hour physiotherapy session',
          price: 50.00,
          category: 'physiotherapy',
          is_booked: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          service_id: 2,
          user_id: 2,
          name: 'Home Nursing Visit',
          description: 'Two-hour home nursing visit',
          price: 70.00,
          category: 'home_nursing',
          is_booked: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          service_id: 3,
          user_id: 4,
          name: 'Sports Injury Recovery',
          description: 'Physiotherapy session for athletes.',
          price: 60.00,
          category: 'physiotherapy',
          is_booked: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          service_id: 4,
          user_id: 6,
          name: 'Post-surgery Physiotherapy',
          description: 'Rehabilitation after surgery.',
          price: 100.00,
          category: 'physiotherapy',
          is_booked: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          service_id: 5,
          user_id: 8,
          name: 'Orthopedic Physiotherapy',
          description: 'Orthopedic treatment and rehabilitation.',
          price: 80.00,
          category: 'physiotherapy',
          is_booked: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        }
      ]);
    };

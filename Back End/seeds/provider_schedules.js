exports.seed = async function(knex) {
  // حذف جميع البيانات في جدول provider_schedules
  await knex('provider_schedules').del();

  // إعادة تعيين الـ sequence
  await knex.raw('SELECT setval(\'provider_schedules_schedule_id_seq\', 1);');

  // إدراج بيانات جديدة في جدول provider_schedules
  await knex('provider_schedules').insert([
    {
      provider_id: 1,
      schedule_date: '2024-10-01',
      month: 'Oct',
      day_of_month: 'Tue',
      start_time: '09:00:00',
      end_time: '12:00:00',
      is_available: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      provider_id: 2,
      schedule_date: '2024-10-02',
      month: 'Oct',
      day_of_month: 'Wed',
      start_time: '10:00:00',
      end_time: '13:00:00',
      is_available: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      provider_id: 3,
      schedule_date: '2024-10-03',
      month: 'Oct',
      day_of_month: 'Thu',
      start_time: '11:00:00',
      end_time: '14:00:00',
      is_available: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      provider_id: 1,
      schedule_date: '2024-10-04',
      month: 'Oct',
      day_of_month: 'Fri',
      start_time: '08:00:00',
      end_time: '11:00:00',
      is_available: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      provider_id: 2,
      schedule_date: '2024-10-05',
      month: 'Oct',
      day_of_month: 'Sat',
      start_time: '10:00:00',
      end_time: '12:00:00',
      is_available: false, // غير متاح
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }
  ]);
};

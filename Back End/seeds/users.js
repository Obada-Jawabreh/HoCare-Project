exports.seed = function(knex) {
  return knex('users').del() 
      .then(function() {
          return knex.raw('SELECT setval(\'users_user_id_seq\', 1);');
      })
      .then(function() {
          return knex('users').insert([
        {
          user_id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: 'hashed_password',
          phoneNumber: '123456789',
          profilePicture: 'path_to_picture_1',
          aboutMe: 'I am a physiotherapist.',
          isActive: true,
          isApproved: true,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          password: 'hashed_password',
          phoneNumber: '987654321',
          profilePicture: 'path_to_picture_2',
          aboutMe: 'I am a home nurse.',
          isActive: true,
          isApproved: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 3,
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice.smith@example.com',
          password: 'hashed_password',
          phoneNumber: '123450987',
          profilePicture: 'path_to_picture_3',
          aboutMe: 'Experienced home nurse.',
          isActive: true,
          isApproved: true,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 4,
          firstName: 'Bob',
          lastName: 'Johnson',
          email: 'bob.johnson@example.com',
          password: 'hashed_password',
          phoneNumber: '432156789',
          profilePicture: 'path_to_picture_4',
          aboutMe: 'Senior physiotherapist.',
          isActive: true,
          isApproved: true,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 5,
          firstName: 'Clara',
          lastName: 'Brown',
          email: 'clara.brown@example.com',
          password: 'hashed_password',
          phoneNumber: '789123456',
          profilePicture: 'path_to_picture_5',
          aboutMe: 'Home care specialist.',
          isActive: true,
          isApproved: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 6,
          firstName: 'David',
          lastName: 'Williams',
          email: 'david.williams@example.com',
          password: 'hashed_password',
          phoneNumber: '456789123',
          profilePicture: 'path_to_picture_6',
          aboutMe: 'Physiotherapist with 5 years of experience.',
          isActive: true,
          isApproved: true,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 7,
          firstName: 'Eva',
          lastName: 'Davis',
          email: 'eva.davis@example.com',
          password: 'hashed_password',
          phoneNumber: '159753456',
          profilePicture: 'path_to_picture_7',
          aboutMe: 'Nurse specializing in elderly care.',
          isActive: true,
          isApproved: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 8,
          firstName: 'Frank',
          lastName: 'Miller',
          email: 'frank.miller@example.com',
          password: 'hashed_password',
          phoneNumber: '753159852',
          profilePicture: 'path_to_picture_8',
          aboutMe: 'Orthopedic physiotherapist.',
          isActive: true,
          isApproved: true,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 9,
          firstName: 'Grace',
          lastName: 'Garcia',
          email: 'grace.garcia@example.com',
          password: 'hashed_password',
          phoneNumber: '951357246',
          profilePicture: 'path_to_picture_9',
          aboutMe: 'Expert in home nursing for children.',
          isActive: true,
          isApproved: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          user_id: 10,
          firstName: 'Henry',
          lastName: 'Martinez',
          email: 'henry.martinez@example.com',
          password: 'hashed_password',
          phoneNumber: '753456951',
          profilePicture: 'path_to_picture_10',
          aboutMe: 'Specialized in physical rehabilitation.',
          isActive: true,
          isApproved: true,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        }
      ]);
    });
};
 
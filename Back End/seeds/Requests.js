exports.seed = function (knex) {
  return knex("applicants_requests")
    .del()
    .then(function () {
      return knex("applicants_requests").insert([
        {
          user_id: 2,
          fullName: "Jane Doe",
          profession: "home nurse",
          resume: "path_to_resume_1",
          certificate: "path_to_certificate_1",
          licenseToPractice: "path_to_license_1",
          status: null,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 5,
          fullName: "Clara Brown",
          profession: "home nurse",
          resume: "path_to_resume_2",
          certificate: "path_to_certificate_2",
          licenseToPractice: "path_to_license_2",
          status: null,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 7,
          fullName: "Eva Davis",
          profession: "elderly care nurse",
          resume: "path_to_resume_3",
          certificate: "path_to_certificate_3",
          licenseToPractice: "path_to_license_3",
          status: null,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 9,
          fullName: "Grace Garcia",
          profession: "child care nurse",
          resume: "path_to_resume_4",
          certificate: "path_to_certificate_4",
          licenseToPractice: "path_to_license_4",
          status: null,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    })
    .then(() => {
      // تأكد من أن التسلسل موجود وقم بتعيينه (اختياري)
      return knex.raw(
        "SELECT setval('applicants_requests_request_id_seq', (SELECT COALESCE(MAX(request_id), 0) FROM \"applicants_requests\"))"
      );
    });
};

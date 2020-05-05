exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'test1',
      password: 'test',
      techid: '1234',
      is_superuser: 'false',
      email: 'test1@test.net'
    },
    {
      username: 'test2',
      password: 'test',
      techid: '4567',
      is_superuser: 'false',
      email: 'test2@test.net'
    },
    {
      username: 'test3',
      password: 'test',
      techid: '8910',
      is_superuser: 'false',
      email: 'test3@test.net'
    }
  ]);
};

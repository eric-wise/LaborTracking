exports.seed = function(knex) {
  return knex('events').insert([
    {
      user_id: 1,
      po: '123456',
      event_text: 'Testing the test.',
      location: 'Home',
      category: 1,
      event_start: '2020-02-29 19:10:25-07',
      event_end: '2020-02-29 19:10:25-07'
    },
    {
      user_id: 2,
      po: '123456',
      event_text: 'Testing the test.',
      location: 'Work',
      category: 2,
      event_start: '2020-03-22 01:10:25-07',
      event_end: '2020-02-29 19:10:25-07'  
    },
    {
      user_id: 3,      
      po: '123456',
      event_text: 'Testing the test.',
      location: 'School',
      category: 3,
      event_start: '2020-04-22 15:10:25-07',
      event_end: '2020-02-29 19:10:25-07'      
    }
  ]);
};

exports.up = function(knex) {
    return knex.schema
      .createTable('users', function(table) {
        table.increments();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.integer('techid').notNullable();
        table.boolean('is_superuser').notNullable().defaultTo('false');
        table.string('email').notNullable();
      })
      .createTable('events', function(table) {
        table.increments();
        table
          .integer('user_id')
          .references('id')
          .inTable('users');
        table.integer('po').notNullable();
        table.string('event_text').notNullable();
        table.string('location');
        table.integer('category').notNull();
        table.timestamp('event_start').notNull();          
        table.timestamp('event_end').notNull();                            
      });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('events').dropTable('users');
};

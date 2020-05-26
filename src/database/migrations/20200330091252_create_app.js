
exports.up = function(knex) {
  return knex.schema.createTable('app', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('url');
    table.string('login').notNullable();
    table.string('pwd').notNullable();    
    table.string('note');
    table.boolean('active').notNullable();

    table.unique('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('app');
};

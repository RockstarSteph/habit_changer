
exports.up = function(knex, Promise) {
    return knex.schema.createTable('entries', table=>{
        table.increments('id').primary().unsigned();
        table.string('img');
        table.string('description_text');
        table.string('entry_type');
        table.date('entry_date')
        table.integer('user_id');
        table.timestamps(true, true);
        table.foreign('user_id').references('id').on('users').onDelete('cascade');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('entries');
  };
exports.up = function (knex) {
  return knex.schema.table("users", function (table) {
    // se va modiiicar la tabla
    table.renameColumn("edad", "age"); 
};

exports.down = function (knex) {}; 

exports.up = function (knex) {
  return knex.schema.table("users", function (table) {
    table.renameColumn("edad", "age");
  });
};

exports.down = function (knex) {};

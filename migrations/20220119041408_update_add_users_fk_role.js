exports.up = function (knex) {
  return knex.schema.table("users", (table) => {
    table.integer("id_roles").references("roles.id");
  });
};

exports.down = function (knex) {};

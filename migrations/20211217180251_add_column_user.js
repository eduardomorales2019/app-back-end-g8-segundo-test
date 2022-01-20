exports.up = function (knex) {
  return knex.schema.table("shoes", (table) => {
    table.boolean("is_active").default(true);
  });
};

exports.down = function (knex) {};

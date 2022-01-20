exports.up = async (knex) => {
  await knex.schema.createTable("genres", (table) => {
    table.increments("id_genero").primary();
    table.string("description");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("genres");
};

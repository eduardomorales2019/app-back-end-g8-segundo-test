// export  sirve para que se pueda usar en otro archivo .
// up es para crear la tabla.
exports.up = async function (knex) {
  await knex.schema.createTable("shoes", (table) => {
    table.increments("id_shoe").primary();
    table.string("description");
    table.decimal("quantity"); // se crea una columna de tipo number. por default 0");
    table.boolean("sold").defaultTo(false); // se crea una columna de tipo boolean. por default FALso
    table.timestamp("created_at").defaultTo(knex.fn.now()); // crea una columna de fecha y hora.
    table.timestamp("updated_at").defaultTo(knex.fn.now()); // crea una columna de fecha y hora.
  });
};
// down es para borrar la tabla. es un drop table.
exports.down = async function (knex) {
  await knex.schema.dropTable("shoes");
};

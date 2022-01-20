exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id_user").primary();
    table.string("name");
    table.string("first_Name");
    table.string("Second_LastName");
    table.string("email");
    table.string("edad").unique(); // modificar nombre de tabla por age y no edad

    table.decimal("phone").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.integer("id_genero").references("genres.id_genero"); // ojo aqui poner  bien la referencia con el punto. y su atributo.

    // asi la migracion se hace bien y ceramos la clave foranea.

    // agregar foreing key de shoe.id  y puede ser nulo
    // table.integer("id_shoe").references("shoes.id_shoe").nullable(); //! asi seria.

    // ademas agregar columand e tipo boleano is active. y parta el password
    //! table.boolean("is_active").defaultTo(true);
    //! table.string("password").notNullable();
    // hacermcrud, usando las 3 capas. ! crear, leer, actualizar, eliminar.
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
};

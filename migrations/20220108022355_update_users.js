exports.up = function (knex) {
  return knex.schema.table("users", function (table) {
    // agregar foreing key de shoe.id  y puede ser nulo
    table.integer("id_shoe").references("shoes.id_shoe").nullable(); //! asi seria. // ojo ver tipo de dato que sea iguañ , integer etccc!!!
    // agregar is active
    table.boolean("is_active").defaultTo(true);
    // agregar password
    table.string("password").notNullable();
  });
};

//? USER MIGRACIONES DESCRIPTIVAS Y VER CONVENVIONES. YO NO  HICE COMO DEBE SER!!!!!! VER ONVENCIONES Y DEBER DESPCRIPTIVO.!! USER. AGE, ASI MAS O MENOS
// ! ADD.USER.FOREIGN.KEY--mas descriptivo
exports.down = function (knex) {};

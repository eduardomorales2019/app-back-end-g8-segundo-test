// se necesutan las credenciales de acceso. Que es knexfile.js
// dependiendo del ambiente de trabajo se usa una base de datos

// pasamos la configuracion , osea el archivo config o instancia de knex

const knexInstance = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/config.js");
// !==================================CREATE==.insert en su metodo =============================================
// CREATE
const create = (bodyGenre) => {
  return knexInstance("genres").insert(bodyGenre);
};

// !==================================GET ALL==, select en su metodo==================
const getAll = () => {
  return knexInstance("genres").select("id_genero", "value");

  // .where({ isActive: true }); // ESTO SERIA PARTE DEL BORRAOD LOGICO, PERO NO ME FUNCIONA
};

// !====================================================
// Get BY ID ----PATCH

const getByID = (id_genero) => {
  return knexInstance("genres").where({ id_genero }).select("*"); // * es para todos los atributos  ;
};

//! ========================UPDATE  by id, para patch, ya que solo tenemos una columna en la base de atos.

const uPDateById = (id_genero, body) => {
  return knexInstance("genres").where({ id_genero }).update(body);
};

//========================DELETE!!!!
const EraseById = (id_genero) => {
  return knexInstance("genres").where({ id_genero }).del();
};

//DELETE FISICO PENDIENTE

module.exports = { create, getAll, getByID, uPDateById, EraseById };

// Se pasa la config || instancia de Knex
const knexInstance = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/config.js");

// =========
// CREATE
const createRols = (bodyRol) => {
  return knexInstance("roles").insert(bodyRol);
};

// !==================================GET ALL==, select en su metodo==================
const getAllRols = () => {
  return knexInstance("roles").select("*");
};

// !====================================================
// Get BY ID ----PATCH

const getByIDRols = (id) => {
  return knexInstance("roles").where({ id }).select("*"); // * es para todos los atributos  ;
};

//! ========================UPDATE  by id, para patch, ya que solo tenemos una columna en la base de atos.

const uPDateByIdRols = (id, body) => {
  return knexInstance("roles").where({ id }).update(body);
};

//========================DELETE!!!!
const EraseByIdRols = (id) => {
  return knexInstance("roles").where({ id }).del();
};
// =========

module.exports = {
  createRols,
  getAllRols,
  getByIDRols,
  uPDateByIdRols,
  EraseByIdRols,
};

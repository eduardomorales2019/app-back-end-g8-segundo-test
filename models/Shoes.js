const knexInstance = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/config.js");

//? ==============FIND SHOE==================

const getAllShoes = () => {
  return knexInstance("shoes").select("*");
};

//? ==============CREATE SHOE==================

const CreateShoe = (bodyShoes) => {
  return knexInstance("shoes").insert(bodyShoes);
};
//? ==============GET SHOE BY ID ==================

const getShoeById = (id_shoe) => {
  return knexInstance("shoes").where({ id_shoe }).select("*");
};

//? ============== ==================patch by id==================
const uPDateById = (id_shoe, body) => {
  console.log(id_shoe, body);
  return knexInstance("shoes").where({ id_shoe }).update(body);
};
//? ============== ==================delete by id==================
const deleteById = (id_shoe) => {
  return knexInstance("shoes").where({ id_shoe }).del();
};

module.exports = {
  getAllShoes,
  CreateShoe,
  getShoeById,
  uPDateById,
  deleteById,
};

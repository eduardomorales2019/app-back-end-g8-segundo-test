// PUNTO DE SALIDA DE LOS MODELOS.

// creammos modelos de generos, excribir de manera singular.
const Genre = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/models/Genre.js");

const Shoes = require("./shoes");
// =====================================================

//?aqui serian mis modelos  con reingenieria
// =====================================================
const shoeModel = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/models/ShoeCopiaRefactor.js");
// =====================================================

const Role = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/models/role.js");

module.exports = {
  Genre,
  Shoes,
  shoeModel,
  Role,
};

// copia de genre para refactoprizacion con el utility!!!

// se necesutan las credenciales de acceso. Que es knexfile.js
// dependiendo del ambiente de trabajo se usa una base de datos

// pasamos la configuracion , osea el archivo config o instancia de knex

const knexInstance = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/config.js");

//? recuperar modelo generico
const genericModelKnex = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/utilities/GenericKnex.js");

const table = "shoes"; // nombre de la tabla .
const columns = ["*"]; // necesitamos el array. por que  es select, y  lo necesitamos mandar con el string soo el arreglo.
const tableId = "id_shoe";
// ==========================================================
const Shoes = genericModelKnex(knexInstance, table, columns, tableId); // lo llamamos asi porque es una funcion generica y defino parametoers.  este es nuestrommodelo de genero.
//y nos quedamos con este codigo solamente.

module.exports = Shoes;

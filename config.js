const knex = require("Knex");

const knexFile = require("./knexfile.js"); // recuperamos el archivo knexfile.js
const env = process.env.NODE_ENV; // recupracmos variabñes de enronro.

// dependiendo de el archivo de knexfile entramos a ala parte  de staiging, production o development.

// FORMAD DE ACCEDER A UN ATRIBITO

// 1. .KNEX.FILE CON EL PUNTO Y EL NOMBRE DEL ATRIBUTO
// 2.  KNEXFILE[ATRIBUTO

// KNEXIULE['DEVELOPMENT'], AQUI ACCEDEMOS A ESAS AREAS. CON LOS CORCHETES.

console.log("varible de entorno", process.env.NODE_ENV);

//! aqui exportamos las credenciales para conectarnos a la base de datos.

const KnexInstance = knex(knexFile[env]); // instanciamos knex con el archivo knexfile.js

// console.log(knexFile, "KnexFile");
module.exports = KnexInstance; // exportamos la instancia de knex.

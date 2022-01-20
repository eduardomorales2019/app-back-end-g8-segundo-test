const express = require("express");
require("dotenv").config(); // para cambair el  path es: "/(custom)/(path/to/.env)"
const mainRouter = require("../knexProject/routes/indexroutes"); // este no se si sirva ya que no me corrio el index de routes, sino el general
const app = express();

// IMPORTATR MIDDLEWARE DE EXPRESS
const { errors } = require("celebrate");

const { PrintTime, PrintName } = require("./middleware/ConsoleMiddleWares.js");

// const knexGeneric = require("../knexProject/utilities/GenericKnex");

// const genericKnex2 = require("../knexProject/utilities/GenericKnex2");

//! varianle global del node. PROCESS
const PORT = process.env.PORT || 3000; // process.env.PORT es una variable global del node., si no existe la variable, se usa el 3000.

//! MIDDLE WARE
app.use(express.json()); /// express es paa trabajo con middleware.  usa express jason para parsear lo que recuperamos del endpoint

app.use(PrintTime);
app.use(PrintName);

// metodo .use es para usar middleware.

//  DESDE REACT SE EJECUTA. LOCALHOST: 3000.. ESTE ES NUESTRA BASE, ANTES DEL INDEX DE LAS RUTAS. es una url base por default.
// esta en buena practica que se ponga en el index.js de routes.
app.get("/", (req, res) => {
  res.status(205).json({ message: "este es le backend de GB" });
  try {
    console.log("sin error");
  } catch (error) {
    console.log(error);
  }
});

// INDEX DE RUTAS .
mainRouter(app); // se le pasa el app para que use el router.

console.log(
  "varible de entorno desde archivo .env conn libreria",
  process.env.NODE_ENV
); // aqui se puede ver que variable de entorno esta en uso.

app.use(errors()); // para que se pueda usar el middleware de celebrate.
app.listen(PORT, () => {
  console.log("servidor ok, en puerto 3000", PORT); // mensaje
});

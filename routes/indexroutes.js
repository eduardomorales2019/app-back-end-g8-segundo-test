// se crea el index dentro de routes para que se pueda acceder a la ruta ya que es el punto de partida, la ventana de donde se abre.

const express = require("express");

// =========================================RUTAS=======================================
// SE BA A OCUPAR RUTA DE SHOES. Y GENRE
const ShoeRoute = require("..//routes//ShoesRoutes");
const GenresRoutes = require("../routes/GenreRoutes");
const UserRoutes = require("../routes/UserRoutes");
const AuthRoutes = require("../routes/AuthRoutes");
const RolRoutes = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/routes/rolRoutes.js");
// ====================================FUNCION MAI N ROUER =======================================
function mainRouter(app) {
  // creat la instancia de router
  const router = express.Router();
  // middle ware para defienir URL base
  app.use("/api/backend-shoes/v1", router);

  //DESDE REACT O FRONT.  se ejecuta get.  localhost:3030/api/backend-shoes/v1/shoes
  //DESDE REACT O FRONT.  se ejecuta POST.  localhost:3030/api/backend-shoes/v1/shoes
  //DESDE REACT O FRONT.  se ejecuta GET:ID  localhost:3030/api/backend-shoes/v1/shoes
  //DESDE REACT O FRONT.  se ejecuta  DELETElocalhost:3030/api/backend-shoes/v1/shoes
  //DESDE REACT O FRONT.  se ejecuta PATCH : ID  localhost:3030/api/backend-shoes/v1/shoes

  // DEFINO RUTAS
  router.use("/shoes", ShoeRoute); // se va a ocupa r la ruta de shoes.route
  router.use("/genres", GenresRoutes); // se va a ocupar la ruta de genres.route
  router.use("/users", UserRoutes); // se va a ocupar la ruta de users.route
  router.use("/auth", AuthRoutes); // se va a ocupar la ruta de auth.route
  router.use("/roles", RolRoutes); // se va a ocupar la ruta de roles.route
}

module.exports = mainRouter;

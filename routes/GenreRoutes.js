const express = require("express");

const GenreController = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/controllers/GenreController.js");
// en la destructuracion  del req.body se puede acceder a los datos del body, pero aqui me mando erro y no avance por dos dias. !!

const router = express.Router();
//obeto.atributo.create
router.post("/", GenreController.create);
router.get("/", GenreController.findAll);
router.get("/:id", GenreController.findById);
router.patch("/:id", GenreController.updDatebyID);

router.delete("/:id", GenreController.deleteById); // no funcionaria sino no marco el metodo

// ============================
module.exports = router;

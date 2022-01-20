const express = require("express");

const roleController = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/controllers/roleControler.js");
// en la destructuracion  del req.body se puede acceder a los datos del body, pero aqui me mando erro y no avance por dos dias. !!

const router = express.Router();
//obeto.atributo.create
router.post("/", roleController.create);
router.get("/", roleController.findAll);
router.get("/:id", roleController.findById);
router.patch("/:id", roleController.updateById);

router.delete("/:id", roleController.deleteById); // no funcionaria sino no marco el metodo

// ============================
module.exports = router;

const express = require("express");
const ShoeController = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/controllers/ShoesController.js");

const router = express.Router(); // este es el que estamos defieniendo . por medio de los verbos http.  esta va estar cachandp.

const validateJWT = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/middleware/ValidateToken.js");

// ============================================metodos=======================================
// ============================================m=======================================
//! esta ruta debe estar protegida por el middleware. por eso leponenmos el middleware. de validate JWT

router.post("/", validateJWT, ShoeController.CreateShoeControler);
// ============================================ =======================================

router.get("/", ShoeController.findAllShoes);
router.get("/:id", ShoeController.findShoeControllerById);

router.patch("/:id", ShoeController.updateContollerById);

router.delete("/:id", ShoeController.deleteControllerById);

// ===================================================================================
module.exports = router;

const express = require("express");
const userController = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/controllers/userController.js");
const validateJWT = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/middleware/ValidateToken.js");
const router = express.Router();
const {
  userValidator,
} = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/validators/indexvalidators.js");

const {
  ValidateRole,
} = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/middleware/userMiddleWare.js");
// ===============
router.post(
  "/",
  validateJWT,
  userValidator.createUsers,
  ValidateRole("Admin"),
  userController.CreateUserControler
);
router.get("/", userController.findAllUserControler);
router.get("/:id", userController.findUserControllerById);
router.patch("/:id", userController.updateContollerById);
router.delete("/:id", userController.deleteContollerById);

module.exports = router;

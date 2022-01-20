const express = require("express");
const authController = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/controllers/authcontroller.js");

const router = express.Router();
router.post("/", authController.login);
console.log(authController.login);

module.exports = router;

// no hay modelo , lo compatte con el user. ya que de ai se va ausar!!

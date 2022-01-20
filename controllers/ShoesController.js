const Shoes = require("../models/Shoes");

// =====================================================
// aqui va e archivo de rutas de generic que no me salio !
// =====================================================

//! ======================= GET ALL SHOES =====================================

const findAllShoes = async (req, res) => {
  try {
    const data = await Shoes.getAllShoes();
    res.json({ message: "rows recover sucessful ", result: data });
  } catch (err) {
    res.json({ message: "error", err });
  }
};

//!!=======================CREATE SHOES=====================================
const CreateShoeControler = (req, res) => {
  const { description, sold, quantity } = req.body;
  const newShoe = {
    description,
    sold,
    quantity,
  };

  return Shoes.CreateShoe(newShoe)
    .then((data) => {
      return res
        .status(201)
        .json({ message: "row created succefully ", result: data.rowCount });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(400).json({ message: "Row not inserted", err });
    });
};
//!!=======================GET by ID =====================================
const findShoeControllerById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Shoes.getShoeById(id);
    if (result.length) {
      res.json({ message: "Row recover successfully", result });
    } else {
      res
        .status(404)
        .json({ message: `Row with id ${id} not found`, error: "" });
    }
  } catch (error) {
    res.json({ message: "Error recover row by id", error });
  }
};

//!!===========================PATCH BY ID =================================
const updateContollerById = async (req, res) => {
  const { id } = req.params;
  console.log(id, " soy id de la ruta");
  const { description, sold, quantity } = req.body;
  const newShoe = {
    description,
    sold,
    quantity,
  };
  try {
    const rowUpdated = await Shoes.uPDateById(id, newShoe);
    res.json({ message: "Row update successfully", result: rowUpdated });
  } catch (error) {
    res.json({ message: "Error update row by id", error });
  }
};
//!!============================ERASE BY ID ================================
const deleteControllerById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowDeleted = await Shoes.deleteById(id);
    res.json({
      message: "Row deleted successfully",
      result: rowDeleted,
    });
  } catch (error) {
    res.json({ message: "Error delete row by id", error });
  }
};

//!!============================================================
module.exports = {
  findAllShoes,
  CreateShoeControler,
  findShoeControllerById,
  updateContollerById,
  deleteControllerById,
};

// aqui importamos el modelo de  genre del modelo.

const Genre = require("../models/Genre"); // aqui importamos con destructuring, primero poner el require y despues ya me sale el metodo que se creo y lo importamos.

//! ==============================metodo create=/usando promesas=============================
const create = (req, res) => {
  const { value } = req.body;

  const newGenre = {
    value, // 'male'
  };

  return Genre.create(newGenre)
    .then((data) => {
      console.log("result", data.rowCount);
      return res
        .status(201)
        .json({ message: "Row created succcessfully", result: data.rowCount });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(400).json({ message: "Row not inserted", error: err });
    });
};

//! ==============================metodo recover ===USANDO async/await====================
// como es get, no necesito req.

const findAll = async (req, res) => {
  try {
    const data = await Genre.getAll();
    res.json({ message: "rows recover sucessful ", result: data });
  } catch (err) {
    res.json({ message: "error", err });
  }
};
//! ==============================get by id ====================

const findById = async (req, res) => {
  const { id } = req.params; // recuperamos por medio des de l ruta
  console.log(id);
  try {
    const result = await Genre.getByID(id); // no funcionaria sino no marco el metodo
    console.log(result); // seria el legnth ya que es im array de objetos. si no hay resultado, el resultado seria 0. y asi suceseivamente para ver si hay resultado.
    // habria que validar el result para ver que no haya un id que no existe.
    //*  ==============validacion de id no encontrado
    if (result.length) {
      // esta validacion es para ver si el resultado  0 es igual a false!!!  cualquier numero diferente de 0 es true.
      //
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
//! ==============================get by id( para patch ) ====================

const updDatebyID = async (req, res) => {
  const { id } = req.params; // recuperamos por medio des de l ruta
  console.log(id);
  const { value } = req.body;
  console.log(value);

  const newGenre = {
    value,
  };
  console.log(newGenre);

  try {
    const rowUpdated = await Genre.uPDateById(id, newGenre);
    res.json({ message: "Row updated", result: rowUpdated });
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

//! ==============================DElete  by id ====================
const deleteById = async (req, res) => {
  const { id } = req.params; // recuperamos por medio des de l ruta

  try {
    const rowDeleted = await Genre.EraseById(id).res.json({
      message: "Row deleted successfully",
      result: rowDeleted,
    });
  } catch (error) {
    res.json({ message: "Error update row by id", error });
  }
};

// ========================================================
module.exports = { create, findAll, findById, updDatebyID, deleteById };

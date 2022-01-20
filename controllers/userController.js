// ? Aqui la logica del negocio.

const ENUM_ROLES = require("../utilities/Roles.Enum");
const user = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/models/Users.js");
const hashPassword = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/utilities/hassPassword.js");

// ==========================metodos de crudad de datos ============================CREATE
const CreateUserControler = async (req, res) => {
  const {
    name,
    first_Name,
    Second_LastName,
    email,
    age,
    phone,
    id_genero,
    id_shoe,
    id_roles, // id_roles para validacion de roles
    is_active,
    password,
  } = req.body;
  console.log(id_roles, "id_roles");
  //! ==========================validacion de roles ============================
  //* validacion de roles
  // iterar enum roles

  const getIdAssociateToRole = (name) => {
    ENUM_ROLES.forEach((value, index) => {
      console.log(value, "value");
      let idRol = 0;
      if (id_roles === value) {
        console.log(index + 1, "index");
        idRol = index + 1;
        console.log(idRol, " Soy idRol");
      }
    });
  };
  //! ==========================validacion de roles ============================
  try {
    // vamos a chacharlo en el  el controlador
    const hashedPassword = await hashPassword(password);
    const roleId = getIdAssociateToRole(id_roles);
    const newUser = {
      name,
      first_Name,
      Second_LastName,
      email,
      age,
      phone,
      id_genero,
      id_roles: roleId, // id_roles para validacion de roles
      id_shoe,
      is_active,
      password: hashedPassword,
    };
    return user
      .CreateUser(newUser)
      .then((data) => {
        console.log(data, "soy la data en el controlador");
        return res.status(201).json({
          message: "User created succcessfully",
          result: data.rowCount,
        });
      })
      .catch((error) => {
        console.log("error", error);
        return res
          .status(400)
          .json({ message: "Row not inserted", error: error });
      });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "User not created successfully", error });
  }
};

// ==========

// return Shoes.CreateShoe(newShoe)
//   .then((data) => {
//
//     return res
//       .status(201)
//       .json({ message: "row created succefully ", result: data.rowCount });
//   })
//   .catch((err) => {
//     console.log("error", err);
//     return res.status(400).json({ message: "Row not inserted", err });
//   });

// ==========================metodos de crudad de datos ============================ GET ALL USERS
//? AQUI ESTOY COLOCNADO EL METODO DE JOINS. QUE ESTA EN EL METODO USER.

const findAllUserControler = async (req, res) => {
  try {
    //const data = await user.getAllUsers();
    const data = await user.findAllWithjoints();
    if (!data.lenght == 0) {
      // validacion de que no este vacio
      res.json({ message: "No hay Usuarios en nuestro sistema", error: "" });
    } else {
      res.json({ message: "Usuarios encontrados", result: data });
      // console.log(data, "soy la data en con los joins");
    }
  } catch (error) {
    res.json({ message: "Error al obtener los usuarios", error: error });
  }
};

// ==========================USER BY ID ============================
const findUserControllerById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await user.getUserById(id);
    if (result.length) {
      res.json({ message: "User recover successfully", result });
    } else {
      res
        .status(404)
        .json({ message: `User with id ${id} not found`, error: "" });
    }
  } catch (error) {
    res.json({ message: "Error recover row by id", error });
  }
};
// ==========================PATCH BY ID ============================
const updateContollerById = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    first_Name,
    Second_LastName,
    email,
    age,
    phone,
    id_genero,
    id_shoe,
    is_active,
    password,
  } = req.body;
  const newUser = {
    name,
    first_Name,
    Second_LastName,
    email,
    age,
    phone,
    id_genero,
    id_shoe,
    is_active,
    password,
  };
  try {
    const result = await user.updateUserById(id, newUser);
    res.json({ message: "Row updated succefully ", result });
  } catch (error) {
    res.json({ message: "Error update row by id", error });
  }
};
// ========================== ERASE  BY ID ============================
const deleteContollerById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await user.deleteUserById(id);
    res.json({ message: "Row deleted succefully ", result });
  } catch (error) {
    res.json({ message: "Error delete row by id", error });
  }
};

module.exports = {
  CreateUserControler,
  findAllUserControler,
  findUserControllerById,
  updateContollerById,
  deleteContollerById,
};

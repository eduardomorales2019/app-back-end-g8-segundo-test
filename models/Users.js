const knexInstance = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/config.js");

//? SE INSERTA LOS METODOS CREADOS EN EL CONTROLER.

const CreateUser = (bodyUser) => {
  return knexInstance("users").insert(bodyUser);
};
const getAllUsers = () => {
  return knexInstance("users").select(
    "id_user",
    "name",
    "first_Name",
    "Second_LastName",
    "phone",
    "age",
    "email",
    "is_active",
    "id_shoe",
    "id_genero",
    "id_roles",
    "password"
  );
};

// !==========================================================
//!JOIN******************************************************
const findAllWithjoints = () => {
  return (
    //FORMATO DEL JOIN
    // join (tabla foranea, id de la tabla () nombre de lo que sea ) = (tabla foranea, id de la tabla (nombre de lo que sea)))
    knexInstance
      .from("users") //? PUEDO QUITAR EL FROM Y ME FUNCIOAN, ES LA ORA FORMA .
      .join("shoes", "users.id_shoe ", "=", "shoes.id_shoe")
      .join("genres", "users.id_genero", "=", "genres.id_genero")
      // .join("roles", "users.id_genero", "=", "roles.id")
      .select("id_user", "name", "first_Name", "Second_LastName")

      .select(
        "users.id_user",
        "shoes.sold",
        "shoes.is_active as is_active_shoe",
        "users.name",
        "users.is_active as is_active_user",
        // ", // ya agarra con as...y lo pone en el nombre de la columna
        "genres.value",
        "genres.id_genero"
        // "roles.name as user_role"
      )
  );
};

//! ==========================================================
//!JOIN******************************************************
//?   FIND   EMAIL******************************************************
const findByEmail = (email) => {
  return knexInstance("users").where({ email });
  // return knexInstance("users").where({ email }).select("*");
};

//? FIN EMAIL******************************************************
const getUserById = (id_user) => {
  return knexInstance("users").where({ id_user }).select("*");
};

const updateUserById = (id_user, body) => {
  return knexInstance("users").where({ id_user }).update(body);
};

const deleteUserById = (id_user) => {
  return knexInstance("users").where({ id_user }).del();
};

module.exports = {
  CreateUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  findAllWithjoints,
  findByEmail,
};
